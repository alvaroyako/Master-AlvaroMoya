import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/Models/Genero';
import { Nacionalidad } from 'src/app/Models/Nacionalidad';
import { Pelicula } from 'src/app/Models/Pelicula';
import { PeliculasserviceService } from 'src/app/services/peliculasservice.service';

@Component({
  selector: 'app-detallepeliculas',
  templateUrl: './detallepeliculas.component.html',
  styleUrls: ['./detallepeliculas.component.css']
})
export class DetallepeliculasComponent implements OnInit {

  @Input() pelicula!: Pelicula;
  @Input() idGenero!: number
  @Input() idNacionalidad!: number
  @Input() index!: number;
  @Output() seleccionarDetallePadre: EventEmitter<any> = new EventEmitter();


  seleccionarDetalleHijo(): void {
    this.seleccionarDetallePadre.emit(this.pelicula)
  }

  constructor(private _service: PeliculasserviceService, private _router: Router, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
