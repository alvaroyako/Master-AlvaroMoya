import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/Models/Genero';
import { Pelicula } from 'src/app/Models/Pelicula';
import { PeliculasserviceService } from 'src/app/services/peliculasservice.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  public peliculas!: Array<Pelicula>
  public generos!: Array<Genero>

  @ViewChild("cajapelicula") cajapelicula!: ElementRef;
  @ViewChild("cajagenero") cajagenero!: ElementRef;

  constructor(private _service: PeliculasserviceService, private _router: Router, private _activeRoute: ActivatedRoute) { }

  cargarPeliculas(): void {
    this._service.getPeliculas().subscribe(response => {
      this.peliculas = response;
    })
  }

  getGeneros(): void {
    this._service.getGeneros().subscribe(response => {
      this.generos = response;
    })
  }

  modificarPelicula() {
    var idpelicula = parseInt(this.cajapelicula.nativeElement.value)
    var idgenero = parseInt(this.cajagenero.nativeElement.value)
    this._service.modificarPelicula(idpelicula, idgenero).subscribe(response => {
      this._router.navigate(["/peliculas/genero/", idgenero]);
    })


  }

  ngOnInit(): void {
    this.cargarPeliculas()
    this.getGeneros()
  }

}
