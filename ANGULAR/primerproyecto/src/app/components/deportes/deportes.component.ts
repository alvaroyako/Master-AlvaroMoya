import { Component } from '@angular/core';

@Component({
    //Indicamos nombre del component
    selector: "deportes-component",
    templateUrl: "./deportes.component.html",
    styleUrls: ["./deportes.component.css"]
})

export class Deportes {
    public deportes: Array<string>;
    public numeros: Array<number>;
    constructor() {
        this.deportes = ["Petanca", "Curling", "Canicas", "Futbol", "Tenis", "Basket", "Natacion", "Ski"];
        this.numeros = [12, 13, 14, 15, 16, 17, 18]
    }
}