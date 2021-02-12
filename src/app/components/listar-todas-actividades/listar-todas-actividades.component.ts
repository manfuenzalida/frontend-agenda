import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad';
import { ApiBackendService } from 'src/app/services/api-backend.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-todas-actividades',
  templateUrl: './listar-todas-actividades.component.html',
  styleUrls: ['./listar-todas-actividades.component.css']
})
export class ListarTodasActividadesComponent implements OnInit {

  public actividades:Actividad[]=null;
  constructor(
    private apiBackendService: ApiBackendService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiBackendService.getActividades().subscribe(
      resp=>{
        this.actividades  = JSON.parse(JSON.stringify(resp)).data;
        //console.log("resp",this.temasActivity);

      });

  }

  onEliminarActividad(id:string){
    this.apiBackendService.deleteActividad(id).subscribe(resp=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'warning',
        title: `Actividad Eliminada!!`
      })
      this.apiBackendService.getActividades().subscribe(
        resp=>{
          this.actividades  = JSON.parse(JSON.stringify(resp)).data;
          //console.log("resp",this.temasActivity);
  
        });
    })
  }

}
