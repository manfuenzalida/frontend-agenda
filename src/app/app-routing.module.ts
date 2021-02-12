import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearActividadComponent } from './components/crear-actividad/crear-actividad.component';
import { ListarActividadComponent } from './components/listar-actividad/listar-actividad.component';
import { LoginComponent } from './components/login/login.component';
import { ListarTodasActividadesComponent } from './components/listar-todas-actividades/listar-todas-actividades.component';


const routes: Routes = [  
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'crear', component: CrearActividadComponent },
{ path: 'list', component: ListarActividadComponent },
{ path: 'listar-todas-actividades', component: ListarTodasActividadesComponent },
{ path: '**', redirectTo: '/login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
