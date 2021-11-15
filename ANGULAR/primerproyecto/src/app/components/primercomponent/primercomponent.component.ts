import { Component } from '@angular/core';

@Component({
    //Indicamos nombre del component
    selector: "primer-component",
    templateUrl: "./primercomponent.component.html",
    styleUrls: ["./primercomponent.component.css"]
})

export class PrimerComponent {
    public titulo: string;
    public descripcion: string;
    public anyo: number;
    public ocultar: boolean;

    //Inicializamo las propiedades en el constructor
    constructor() {
        this.titulo = "Hoy es jueves de Angular";
        this.descripcion = "Aprendiendo Angular a tope";
        this.anyo = 2021;
        this.ocultar = false;
    }

    ocultarComponente(): void {
        this.ocultar = true;
    }
}