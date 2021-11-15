import { Component } from "@angular/core";

@Component({
    selector: "app-formulario-binding-model",
    templateUrl: "./formulariobindingmodel.component.html"
})

export class FormularioBindingModel {
    //Declaramos un model para el binding
    public user: any;
    public mensaje: string;

    constructor() {
        this.user = {
            nombre: "",
            apellidos: "",
            edad: 0
        };
        this.mensaje = "";
    }

    recibirFormulario(): void {
        this.mensaje = "Datos recibidos";
    }
}