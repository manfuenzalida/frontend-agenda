import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es'
import { ApiBackendService } from 'src/app/services/api-backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fecha: Date;
  constructor(
    public apiBackendService: ApiBackendService,
    private router: Router
  ) { }

  ngOnInit(): void {
    registerLocaleData(es);
    this.fecha = new Date();
    if (!this.apiBackendService.usuario) {
      console.log("sin sesion")
      this.router.navigate(['/login']);
    }
  }

}
