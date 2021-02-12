import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBackendService } from '../services/api-backend.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorTokenService implements HttpInterceptor{

  constructor(
    private apiBackendService: ApiBackendService
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(req.url)
    if (req.url.includes('tema') || req.url.includes('actividad'))
    {

    let json = JSON.parse(localStorage.getItem('user'));
    const {token} = json?.data;
    //console.log(token);
    //const userValue = this.apiBackendService?.userValue;
    let authReq = req.clone({
      setHeaders: {
        'Authorization': token,
      },
    });
    return next.handle(authReq);
  }
    return next.handle(req);
  }
}
