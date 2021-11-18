import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/Models/Personaje';
import { Serie } from 'src/app/Models/Serie';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css']
})
export class ModificarpersonajeComponent implements OnInit {
  public series!: Array<Serie>
  public personajes!: Array<Personaje>

  @ViewChild("cajaserie") cajaserie!: ElementRef;
  @ViewChild("cajapersonaje") cajapersonaje!: ElementRef;

  constructor(private _service: SerieService, private _router: Router) { }
  cargarSeries(): void {
    this._service.getSeries().subscribe(response => {
      this.series = response;
    })
  }

  cargarPersonajes(): void {
    this._service.getPersonajes().subscribe(response => {
      this.personajes = response;
    })
  }

  modificarPersonaje() {
    var idserie = parseInt(this.cajaserie.nativeElement.value)
    var idpersonaje = parseInt(this.cajapersonaje.nativeElement.value)
    this._service.modificarPersonaje(idpersonaje, idserie).subscribe(response => {
      this._router.navigate(["/personajes", idserie]);
    })


  }

  ngOnInit(): void {
    this.cargarSeries();
    this.cargarPersonajes();
  }

}
