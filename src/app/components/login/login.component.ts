import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RespLogin } from 'src/app/models/resp-login'

import { ApiBackendService } from 'src/app/services/api-backend.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string = null;
  get email() { return this.loginForm.get('email') };
  get password() { return this.loginForm.get('password') };

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })


  private subscription: Subscription = new Subscription();

  constructor(
    private apiBackendService: ApiBackendService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onLogout();
  }

  onLogin() {
    this.subscription.add(
      this.apiBackendService.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe((respuesta) => {

          const { ...token } = respuesta;

          localStorage.setItem('user', JSON.stringify(token));
          const obj = JSON.parse(JSON.stringify(respuesta));
          this.apiBackendService.usuario = obj.data.usuarioId;
          this.apiBackendService.rol_usuario = obj.data.rol;
          this.apiBackendService.activa_sesion$.emit(true);

          if (obj.data.rol == 'user') {
            Swal.fire({
              title: 'Correcto!',
              text: 'Ahora puedes crear tu agenda!',
              icon: 'success'
            });
            this.router.navigate(['crear']);
          } else {
            Swal.fire({
              title: 'Correcto!',
              text: 'Elimina las actividades pasadas!',
              icon: 'success'
            });
            this.router.navigate(['listar-todas-actividades']);
          }


        },
          error => {
            this.error = error;
          }));
  }

  ngOnDestroy() {
    this.loginForm.value.email = null;
    this.loginForm.value.password = null;
    console.log("ngOnDestroy Login, Clear Password");
  }

  onLogout() {
    this.apiBackendService.logout()
  }


}
