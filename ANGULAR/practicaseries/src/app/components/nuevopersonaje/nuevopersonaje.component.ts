import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/Models/Personaje';
import { Serie } from 'src/app/Models/Serie';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-nuevopersonaje',
  templateUrl: './nuevopersonaje.component.html',
  styleUrls: ['./nuevopersonaje.component.css']
})
export class NuevopersonajeComponent implements OnInit {
  public series!: Array<Serie>

  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajaimagen") cajaimagen!: ElementRef;
  @ViewChild("cajaserie") cajaserie!: ElementRef;
  constructor(private _service: SerieService, private _router: Router) { }

  cargarSeries(): void {
    this._service.getSeries().subscribe(response => {
      this.series = response;
    })
  }

  insertarPersonaje(): void {
    var personaje: Personaje = {
      idPersonaje: 0,
      nombre: this.cajanombre.nativeElement.value,
      imagen: this.cajaimagen.nativeElement.value,
      idSerie: parseInt(this.cajaserie.nativeElement.value)
    }
    console.log(personaje)

    this._service.insertarPersonaje(personaje).subscribe(response => {
      this._router.navigate(["/personajes", personaje.idSerie]);
    })


  }

  ngOnInit(): void {
    this.cargarSeries();
  }

}
