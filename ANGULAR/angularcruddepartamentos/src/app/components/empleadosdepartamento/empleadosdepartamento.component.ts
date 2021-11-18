import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Empleado } from 'src/app/Models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';


@Component({
  selector: 'app-empleadosdepartamento',
  templateUrl: './empleadosdepartamento.component.html',
  styleUrls: ['./empleadosdepartamento.component.css']
})
export class EmpleadosdepartamentoComponent implements OnInit {
  public empleados!: Array<Empleado>

  constructor(private _service: EmpleadoService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var iddepartamento = params['iddepartamento'];
      this._service.getEmpleadosDepartamento(iddepartamento).subscribe(response => {
        this.empleados = response;
      })
    })
  }

}
