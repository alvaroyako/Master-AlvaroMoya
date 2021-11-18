import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from 'src/app/Models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public departamentos!: Array<Departamento>

  constructor(private _route: ActivatedRoute, private _service: DepartamentoService, private _router: Router) { }

  eliminarDepartamento(id: number): void {
    var iddep = id;
    this._service.eliminarDepartamento(iddep).subscribe(response => {
      this._router.navigate(["/home"]);
    })

  }




  ngOnInit(): void {
    this._service.getDepartamentos().subscribe(response => {
      this.departamentos = response
    })


  }

}
