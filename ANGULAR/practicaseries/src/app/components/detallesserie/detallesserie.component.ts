import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Serie } from 'src/app/Models/Serie';
import { SerieService } from 'src/app/services/serie.service';


@Component({
  selector: 'app-detallesserie',
  templateUrl: './detallesserie.component.html',
  styleUrls: ['./detallesserie.component.css']
})
export class DetallesserieComponent implements OnInit {
  public idSerie!:number
  public serie!:Serie

  constructor(private _activeRoute: ActivatedRoute,private _service: SerieService) { 
    
  }

  cargarSeriesId(id:number):void{
    this._service.getSeriesId(id).subscribe(response=>{
      this.serie=response;
      console.log(this.serie)
    })
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
        this.idSerie = parseInt(params['idserie']);
        this.cargarSeriesId(this.idSerie)
    });
  }

}
