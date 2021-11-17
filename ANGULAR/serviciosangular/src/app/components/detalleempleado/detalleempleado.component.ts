import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Empleado } from 'src/app/Models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-detalleempleado',
  templateUrl: './detalleempleado.component.html',
  styleUrls: ['./detalleempleado.component.css']
})
export class DetalleempleadoComponent implements OnInit {
  public empleado!: Empleado

  constructor(
    private _service: EmpleadoService,
    private _route: ActivatedRoute) { }

  findEmpleado(idempleado: string): void {
    this._service.findEmpleado(idempleado).subscribe(response => {
      this.empleado = response
    })
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var id = params['idempleado']
      this.findEmpleado(id)
    })
  }

}
