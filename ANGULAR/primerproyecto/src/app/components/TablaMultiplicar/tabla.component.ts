import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-tabla',
    templateUrl: './tabla.component.html'
})

export class TablaMultiplicar {
    @ViewChild("numero") numero: ElementRef;
    public resultado: number[];
    public num: number;

    constructor() {
        this.resultado = [];
        this.numero = new ElementRef(0);
        this.num = 0;
    }

    mostrarTabla() {
        this.num = parseInt(this.numero.nativeElement.value);
        for (var i = 0; i <= 10; i++) {
            var sol = this.num * i;
            this.resultado.push(sol)
        }
    }

}