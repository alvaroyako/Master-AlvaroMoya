import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Jugador } from 'src/app/Models/Jugador';
import { ApuestasService } from 'src/app/services/apuestas.service';


@Component({
  selector: 'app-detallesjugador',
  templateUrl: './detallesjugador.component.html',
  styleUrls: ['./detallesjugador.component.css']
})
export class DetallesjugadorComponent implements OnInit {
  public jugador!: Jugador;
  constructor(private _activeRoute: ActivatedRoute, private _service: ApuestasService) { }

  getDetallesJugador(idjugador: string): void {
    this._service.getDetallesJugador(idjugador).subscribe(response => {
      this.jugador = response;
    })
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.getDetallesJugador(params['idjugador']);
    });
  }

}
