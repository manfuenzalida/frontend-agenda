import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad';
import { ApiBackendService } from 'src/app/services/api-backend.service';
import Swal from 'sweetalert2'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {

  public selectedTema: string = null;

  get name() { return this.activityForm.get('name') };
  get descripcion() { return this.activityForm.get('descripcion') };
  get fecha() { return this.activityForm.get('fecha') };
  get hora() { return this.activityForm.get('hora') };
  //get temaId() { return this.activityForm.get('temaId') };

  public activityForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    hora: new FormControl('', [Validators.required]),
    //temaId: new FormControl('', [Validators.required])
  })
  public temasActivity = null;
  constructor(
    private apiBackendService: ApiBackendService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiBackendService.getTemas().subscribe(
      resp => {
        this.temasActivity = JSON.parse(JSON.stringify(resp)).data;
      });

  }

  onSelectedTema(id: string) {
    this.selectedTema = id


  }
  onSave() {

    const newActivity: Actividad = {
      _id: '',
      name: this.activityForm.value.name,
      descripcion: this.activityForm.value.descripcion,
      fecha: this.activityForm.value.fecha,
      hora: this.activityForm.value.hora,
      temaId: this.selectedTema,
      usuarioId: this.apiBackendService.usuario
    }

    this.apiBackendService.crearActividad(newActivity).subscribe(
      resp => {
        console.log('Guardado!!', resp)
        Swal.fire({
          title: 'Exito al guardar!',
          text: 'actividad agendada!',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate(['list'])

      }
    );
  }
}
