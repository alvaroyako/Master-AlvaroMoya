import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pelicula } from 'src/app/Models/Pelicula';
import { PeliculasserviceService } from 'src/app/services/peliculasservice.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public visible!: boolean
  public peliculas!: Array<Pelicula>
  public detalle!: Pelicula
  public detalles!: Array<any>
  public genero!: string
  public nacionalidad!: string

  constructor(private _service: PeliculasserviceService, private _router: Router, private _activeRoute: ActivatedRoute) { }

  seleccionarDetallePadre(event: Pelicula) {
    this.visible = true
    this.detalle = event
  }


  getPeliculaGenero(idgenero: number): void {
    this.visible = false
    this._service.getPeliculaGenero(idgenero).subscribe(response => {
      this.peliculas = response;
    })
  }

  getPeliculaNacionalidad(idnacionalidad: number): void {
    this.visible = false
    this._service.getPeliculaNacionalidad(idnacionalidad).subscribe(response => {
      this.peliculas = response;
    })
  }

  buscarPelicula(titulo: string): void {
    this._service.buscarPelicula(titulo).subscribe(response => {
      this.peliculas = response
    })
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['genero']) {
        this.getPeliculaGenero(params['genero']);
      }
      else if ((params['nacionalidad'])) {
        console.log("nacionalidad")
        this.getPeliculaNacionalidad(params['nacionalidad']);
      }
      else if (params['titulo']) {
        console.log(params['titulo'])
        this.buscarPelicula(params['titulo'])
      }


    });
  }

}
