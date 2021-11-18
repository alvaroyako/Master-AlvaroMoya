import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Apuesta } from 'src/app/Models/Apuesta';
import { ApuestasService } from 'src/app/services/apuestas.service';


@Component({
  selector: 'app-realizarapuesta',
  templateUrl: './realizarapuesta.component.html',
  styleUrls: ['./realizarapuesta.component.css']
})
export class RealizarapuestaComponent implements OnInit {
  public apuesta!: Apuesta
  @ViewChild("cajanombre") cajanombre!: ElementRef
  @ViewChild("cajaRM") cajaRM!: ElementRef
  @ViewChild("cajaAM") cajaAM!: ElementRef
  @ViewChild("cajafecha") cajafecha!: ElementRef
  @ViewChild("imagen") imagen!: ElementRef
  constructor(private _service: ApuestasService, private _router: Router) { }

  realizarApuesta() {
    var id = 0;
    var usuario = this.cajanombre.nativeElement.value;
    var resultado = this.cajaRM.nativeElement.value + "-" + this.cajaAM.nativeElement.value
    var fecha = this.cajafecha.nativeElement.value;
    var apuesta = new Apuesta(id, usuario, resultado, fecha)

    this._service.realizarApuesta(apuesta).subscribe(response => {
      this._router.navigate(["/apuestas"]);
    })
  }

  prueba():void{
    
  }

  ngOnInit(): void {
  }

}
