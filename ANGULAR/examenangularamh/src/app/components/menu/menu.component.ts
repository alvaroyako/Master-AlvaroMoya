import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/Models/Genero';
import { Nacionalidad } from 'src/app/Models/Nacionalidad';
import { PeliculasserviceService } from 'src/app/services/peliculasservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public generos!: Array<Genero>
  public nacionalidades!: Array<Nacionalidad>
  @ViewChild("titulo") titulo!: ElementRef

  constructor(private _service: PeliculasserviceService, private _router: Router) { }

  getGeneros(): void {
    this._service.getGeneros().subscribe(response => {
      this.generos = response;
    })
  }

  getNacionalidad(): void {
    this._service.getNacionalidad().subscribe(response => {
      this.nacionalidades = response;
    })
  }

  buscarPelicula() {
    var titulo = this.titulo.nativeElement.value;
    this._router.navigate(["/peliculas/buscar/" + titulo]);
  }

  ngOnInit(): void {
    this.getGeneros()
    this.getNacionalidad()
  }

}
