import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from 'src/app/Models/Equipo';
import { ApuestasService } from 'src/app/services/apuestas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public equipos!: Array<Equipo>
  constructor(private _service: ApuestasService) { }

  getEquipos(): void {
    this._service.getEquipos().subscribe(response => {
      this.equipos = response;
    })
  }

  ngOnInit(): void {
    this.getEquipos();
  }

}
