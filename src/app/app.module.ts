import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { CrearActividadComponent } from './components/crear-actividad/crear-actividad.component';
import { ListarActividadComponent } from './components/listar-actividad/listar-actividad.component';
import { InterceptorTokenService } from './interceptors/interceptor-token.service';
import { ListarTodasActividadesComponent } from './components/listar-todas-actividades/listar-todas-actividades.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    CrearActividadComponent,
    ListarActividadComponent,
    ListarTodasActividadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass : InterceptorTokenService , multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
