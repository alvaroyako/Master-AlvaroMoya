import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';


@Component({
  selector: 'app-listadoempleados',
  templateUrl: './listadoempleados.component.html',
  styleUrls: ['./listadoempleados.component.css']
})
export class ListadoempleadosComponent implements OnInit {
  public empleados!: Array<Empleado>

  constructor(private _service: EmpleadoService) { }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(response => {
      this.empleados = response
    });
  }

}
