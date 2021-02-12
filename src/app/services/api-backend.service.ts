import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Actividad } from 'src/app/models/actividad';
import { Tema } from 'src/app/models/tema';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ApiBackendService {
  usuario: string = null;
  rol_usuario: string = null;
  activa_sesion$ = new EventEmitter<boolean>();
  constructor(private httpClient
    : HttpClient, private router: Router) {
  }



  getTemas(): Observable<Tema[]> {
    return this.httpClient.get<Tema[]>(`${environment.url_api}/tema`);
  }

  getActividades(): Observable<Actividad[]> {
    return this.httpClient.get<Actividad[]>(`${environment.url_api}/actividad`);
  }

  getActividadesUser(usuarioId: string): Observable<Tema[]> {
    return this.httpClient.get<Tema[]>(`${environment.url_api}/actividad/user/${usuarioId}`);
  }


  deleteActividad(actividadId: string) {
    return this.httpClient.delete(`${environment.url_api}/actividad/${actividadId}`);
  }


  crearActividad(actividad: Actividad) {

    let json = JSON.parse(localStorage.getItem('user'));
    const { token } = json?.data;
    const headers = new HttpHeaders({
      'Authorization': token
    });

    return this.httpClient.post(`${environment.url_api}/actividad`, actividad, { headers });


  }

  login(email: string, password: string) {
    const data = { email, password };
    return this.httpClient.post(`${environment.url_api}/login`, data);

  }

  logout() {
    localStorage.removeItem('user');
    this.activa_sesion$.emit(false);
    this.router.navigate(['/login']);
  }

}




