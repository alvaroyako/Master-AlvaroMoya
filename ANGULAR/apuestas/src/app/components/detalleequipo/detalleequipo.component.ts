import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Equipo } from 'src/app/Models/Equipo';
import { ApuestasService } from 'src/app/services/apuestas.service';


@Component({
  selector: 'app-detalleequipo',
  templateUrl: './detalleequipo.component.html',
  styleUrls: ['./detalleequipo.component.css']
})
export class DetalleequipoComponent implements OnInit {
  public equipo!: Equipo
  constructor(private _activeRoute: ActivatedRoute, private _service: ApuestasService) { }

  getDetallesEquipo(idequipo: string): void {
    this._service.getDetallesEquipo(idequipo).subscribe(response => {
      this.equipo = response;
    })
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.getDetallesEquipo(params['idequipo']);
    });
  }
}


