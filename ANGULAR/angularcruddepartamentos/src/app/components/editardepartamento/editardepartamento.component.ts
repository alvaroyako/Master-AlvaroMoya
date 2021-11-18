import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from 'src/app/Models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-editardepartamento',
  templateUrl: './editardepartamento.component.html',
  styleUrls: ['./editardepartamento.component.css']
})
export class EditardepartamentoComponent implements OnInit {
  public departamento!: Departamento;

  @ViewChild("cajanumero") cajanumero!: ElementRef
  @ViewChild("cajanombre") cajanombre!: ElementRef
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef

  constructor(private _route: ActivatedRoute, private _service: DepartamentoService, private _router: Router) { }

  updateDepartamento(): void {
    var num = parseInt(this.cajanumero.nativeElement.value)
    var nom = this.cajanombre.nativeElement.value
    var loc = this.cajalocalidad.nativeElement.value
    var departamento = new Departamento(num, nom, loc)
    this._service.modificarDepartamento(departamento).subscribe(response => {
      this._router.navigate(["/home"]);
    })

  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var numero = parseInt(params['numero']);
      this.departamento = new Departamento(numero, params['nombre'], params['localidad']);
    })
  }

}
