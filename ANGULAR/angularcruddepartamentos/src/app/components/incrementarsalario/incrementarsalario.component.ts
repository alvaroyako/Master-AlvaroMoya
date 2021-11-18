import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Empleado } from 'src/app/Models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-incrementarsalario',
  templateUrl: './incrementarsalario.component.html',
  styleUrls: ['./incrementarsalario.component.css']
})
export class IncrementarsalarioComponent implements OnInit {
  public empleado!: Empleado;
  @ViewChild("cajaincremento") cajaincremento!: ElementRef;

  constructor(private _service: EmpleadoService, private _router: Router, private _route: ActivatedRoute) { }

  getEmpleado(idempleado: string): void {
    this._service.getDetallesEmpleado(idempleado).subscribe(response => {
      this.empleado = response
    })
  }

  incrementarSalario(): void {
    var incremento = this.cajaincremento.nativeElement.value;
    var id = this.empleado.idEmpleado.toString();
    this._service.incrementarSalarioEmpleado(id, incremento).subscribe(response => {
      this.getEmpleado(id)
    })
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var idempleado = params['idempleado'];
      this._service.getDetallesEmpleado(idempleado).subscribe(response => {
        this.empleado = response
      })
    });
  }

}
