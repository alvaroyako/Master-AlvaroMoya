import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado2 } from 'src/app/Models/empleado2';
import { Empleado2Service } from 'src/app/services/empleado2.service';
Empleado2Service

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {
  public oficios!: Array<string>
  public empleados!: Array<Empleado2>
  @ViewChild("cajaoficio") cajaoficio!: ElementRef;
  constructor(private _service: Empleado2Service) { }

  cargarOficios() {
    this._service.getOficios().subscribe(response => {
      this.oficios = response
    })
  }

  cargarEmpleados() {
    var oficio = this.cajaoficio.nativeElement.value
    this._service.getEmpleadosOficio(oficio).subscribe(response => {
      this.empleados = response
    })
  }

  ngOnInit(): void {
    this.cargarOficios()
  }

}
