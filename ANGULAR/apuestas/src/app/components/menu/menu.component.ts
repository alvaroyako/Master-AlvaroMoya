import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from 'src/app/Models/Equipo';
import { ApuestasService } from 'src/app/services/apuestas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public equipos!: Array<Equipo>
  @ViewChild("nombre") nombre!: ElementRef

  constructor(private _service: ApuestasService,private _router: Router) { }

  getEquipos(): void {
    this._service.getEquipos().subscribe(response => {
      this.equipos = response;
    })
  }

  buscarJugador():void{
    var nombre=this.nombre.nativeElement.value;
    this._router.navigate(["/busqueda/"+nombre]);
  }


  ngOnInit(): void {
    this.getEquipos();
  }

}
