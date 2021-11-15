import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {
  public numero !: number;
  public doble !: number;

  //Necesitamos recibir el objeto ActivatedRoute para recuperar parametros
  //En angular los objetos inyectados se denominan con guion bajo
  constructor(private _activeRoute: ActivatedRoute, private _router: Router) { }

  redirect(num: number): void {
    this._router.navigate(["/numerodoble", num]);
  }

  ngOnInit(): void {
    //Aqui es donde se recuperan los parametros
    //se utiliza una promesa llamada subscribe
    //y la promesa trae params con los paramtros
    //Por su name
    this._activeRoute.params.subscribe((params: Params) => {
      //Preguntamos si existe el parametro numero
      if (params['numero'] != null) {
        //asignamos la propiedad para la pagina
        this.numero = parseInt(params['numero']);
        this.doble = this.numero * 2;
      }
    });
  }

}
