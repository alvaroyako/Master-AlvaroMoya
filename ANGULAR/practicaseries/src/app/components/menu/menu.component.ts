import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/Models/Serie';
import { SerieService } from 'src/app/services/serie.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public series!:Array<Serie>
  constructor(private _service: SerieService) { }

  cargarSeries():void{
    this._service.getSeries().subscribe(response=>{
      this.series=response;
    })
  }

  ngOnInit(): void {
    this.cargarSeries();
  }

}
