import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Personaje } from 'src/app/Models/Personaje';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public idSerie!:number
  public personajes!:Array<Personaje>

  constructor(private _router: Router,private _activeRoute: ActivatedRoute,private _service: SerieService) { }

  cargarPersonajesId(id:number):void{
    this._service.getPersonajesId(id).subscribe(response=>{
      this.personajes=response;
    })
  }

  redirect(id: number): void {
    this._router.navigate(["/detalles", id]);
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
        this.idSerie = parseInt(params['idserie']);
        this.cargarPersonajesId(this.idSerie)
    });
  }

}
