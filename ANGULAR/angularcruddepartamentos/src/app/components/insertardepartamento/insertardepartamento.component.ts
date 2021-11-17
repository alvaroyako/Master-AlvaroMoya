import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/Models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-insertardepartamento',
  templateUrl: './insertardepartamento.component.html',
  styleUrls: ['./insertardepartamento.component.css']
})
export class InsertardepartamentoComponent implements OnInit {
  @ViewChild("cajanumero") cajanumero!: ElementRef
  @ViewChild("cajanombre") cajanombre!: ElementRef
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef
  constructor(private _service: DepartamentoService, private _router: Router) { }

  insertarDepartamento(): void {
    var num = parseInt(this.cajanumero.nativeElement.value)
    var nom = this.cajanombre.nativeElement.value
    var loc = this.cajalocalidad.nativeElement.value
    var departamento = new Departamento(num, nom, loc)
    this._service.insertarDepartamento(departamento).subscribe(response => {

    })
    this._router.navigate(["/home"]);
  }

  ngOnInit(): void {
  }

}
