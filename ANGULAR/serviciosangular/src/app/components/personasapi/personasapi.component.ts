import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Models/persona';
import { ServicepersonasService } from 'src/app/services/servicepersonas.service';

@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  styleUrls: ['./personasapi.component.css']
})
export class PersonasapiComponent implements OnInit {
  public personas!: Array<Persona>
  constructor(private _service: ServicepersonasService) {

  }

  ngOnInit(): void {
    this._service.getPersonas().subscribe(response => {
      this.personas = response;
    });
  }

}
