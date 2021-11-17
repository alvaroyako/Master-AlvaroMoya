import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from 'src/app/Models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public departamentos!: Array<Departamento>

  constructor(private _service: DepartamentoService) { }



  ngOnInit(): void {
    this._service.getDepartamentos().subscribe(response => {
      this.departamentos = response
    })
  }

}
