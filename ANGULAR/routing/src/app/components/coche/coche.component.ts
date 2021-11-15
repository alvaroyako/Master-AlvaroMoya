import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from 'src/app/Models/coche';


@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  @Input() coche!: Coche;
  public mensaje!: string;
  @Output() seleccionarCoche: EventEmitter<any> = new EventEmitter();

  seleccionarCocheHijo(): void {
    this.seleccionarCoche.emit(this.coche);
  }

  constructor() { }

  comprobarEstado(): boolean {
    if (this.coche.estado == false) {
      this.mensaje = "El coche esta apagado";
      this.coche.velocidad = 0
      return false;
    } else {
      this.mensaje = "El coche esta encendido";
      return true;
    }
  }

  encenderCoche(): void {
    this.coche.estado = !this.coche.estado;
    this.comprobarEstado();
  }

  acelerarCoche(): void {
    if (this.comprobarEstado() == false) {
      alert("El coche no esta encendido")
    } else {
      this.coche.velocidad = this.coche.velocidad + this.coche.aceleracion;
      if (this.coche.velocidad > this.coche.velocidadMaxima) {
        this.coche.velocidad = this.coche.velocidadMaxima;
      }
    }
  }

  ngOnInit(): void {
    this.comprobarEstado()
  }

}
