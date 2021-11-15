import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "app-formulario-referencia",
    templateUrl: "./formulariosreferencia.component.html"
})

export class FormularioReferencia {
    @ViewChild("cajanumero1") cajanumero1: ElementRef;
    @ViewChild("cajanumero2") cajanumero2: ElementRef;
    public suma: number;
    constructor() {
        this.suma = 0;
        this.cajanumero1 = new ElementRef(0);
        this.cajanumero2 = new ElementRef(0);
    }

    sumarNumeros(): void {
        var num1 = parseInt(this.cajanumero1.nativeElement.value);
        var num2 = parseInt(this.cajanumero2.nativeElement.value);
        this.suma = num1 + num2;
    }
}