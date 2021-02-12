import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad';
import {ApiBackendService} from 'src/app/services/api-backend.service'

@Component({
  selector: 'app-listar-actividad',
  templateUrl: './listar-actividad.component.html',
  styleUrls: ['./listar-actividad.component.css']
})
export class ListarActividadComponent implements OnInit {

  public actividades:Actividad[]=null;
  constructor(
    private apiBackendService: ApiBackendService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiBackendService.getActividadesUser(this.apiBackendService.usuario).subscribe(
      resp=>{
        this.actividades  = JSON.parse(JSON.stringify(resp)).data;
        //console.log("resp",this.temasActivity);

      });

  }

}
