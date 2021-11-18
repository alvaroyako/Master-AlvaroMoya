import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apuesta } from 'src/app/Models/Apuesta';
import { ApuestasService } from 'src/app/services/apuestas.service';


@Component({
  selector: 'app-listaapuestas',
  templateUrl: './listaapuestas.component.html',
  styleUrls: ['./listaapuestas.component.css']
})
export class ListaapuestasComponent implements OnInit {
  public apuestas!: Array<Apuesta>
  constructor(private _activeRoute: ActivatedRoute, private _service: ApuestasService) { }

  getApuestas(): void {
    this._service.getApuestas().subscribe(response => {
      this.apuestas = response;
    })
  }

  ngOnInit(): void {
    this.getApuestas()
  }

}
