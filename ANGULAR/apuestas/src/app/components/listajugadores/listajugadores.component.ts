import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Jugador } from 'src/app/Models/Jugador';
import { ApuestasService } from 'src/app/services/apuestas.service';

@Component({
  selector: 'app-listajugadores',
  templateUrl: './listajugadores.component.html',
  styleUrls: ['./listajugadores.component.css']
})
export class ListajugadoresComponent implements OnInit {
  public jugadores!: Array<Jugador>
  public idEquipo!: string

  constructor(private _activeRoute: ActivatedRoute, private _service: ApuestasService) { }

  getListaJugadores(idequipo: string): void {
    this._service.getListaJugadores(idequipo).subscribe(response => {
      this.jugadores = response;
    })
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.idEquipo = params['idequipo']
      this.getListaJugadores(this.idEquipo);
    });
  }

}
