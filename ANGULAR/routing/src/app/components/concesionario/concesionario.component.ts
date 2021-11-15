import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/Models/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent implements OnInit {
  public coches: Array<Coche>
  public mensaje!: string;

  seleccionarCochePadre(event: Coche): void {
    this.mensaje = "Coche seleccionado!!! " + event.marca + " es tu favorito, y tiene una velocidad maxima de " + event.velocidadMaxima;

  }

  constructor() {
    this.coches = [
      new Coche("Ford", "Mustang", 0, 320, 30, false),
      new Coche("Kia", "Pikachu", 0, 150, 5, false),
      new Coche("Lamborguini", "Diablo", 0, 450, 60, false),
      new Coche("Pixar", "El rayo macuin", 0, 999, 99, false)
    ]
  }

  ngOnInit(): void {
  }

}
