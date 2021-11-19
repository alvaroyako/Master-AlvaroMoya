import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Jugador } from 'src/app/Models/Jugador';
import { ApuestasService } from 'src/app/services/apuestas.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  public jugadores!:Array<Jugador>
  @ViewChild("nombre") nombre!: ElementRef

  constructor(private _activeRoute: ActivatedRoute, private _service: ApuestasService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this._service.buscarJugador(params['nombre']).subscribe(response => {
        this.jugadores = response;
      })
    });
  }

}
