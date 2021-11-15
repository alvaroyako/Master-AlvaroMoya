import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: "hooks-angular",
    templateUrl: "./hokksangular.component.html"
})

export class HooksAngular implements OnInit {
    public mensaje: string;
    constructor() {
        console.log("Constructor, yo voy primero")
        this.mensaje = "Mensaje dese Component"
    }

    ngOnInit(): void {
        console.log("ngOnInit(): Ejecutando despues del constructor")
    }

    ngDoCheck() {
        console.log("ngDoCheck(): La vista ha cambiado")
    }

    cambiarMensaje() {
        this.mensaje = "Arriquitisquis"
    }

    ngOnDestroy(): void {
        console.log("Componente destruido")
    }


}