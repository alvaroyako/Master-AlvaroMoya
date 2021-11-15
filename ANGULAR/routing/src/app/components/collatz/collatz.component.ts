import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public numero !: number;
  public pasos: number[]

  constructor(private _activeRoute: ActivatedRoute) {
    this.pasos = []
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      //Preguntamos si existe el parametro numero
      if (params['numero'] != null) {
        this.pasos = []
        this.numero = parseInt(params['numero']);
        var num = this.numero
        this.pasos.push(num)
        while (num != 1) {
          if (num % 2 == 0) {
            num = num / 2
            this.pasos.push(num)
          } else {
            num = num * 3;
            num += 1;
            this.pasos.push(num)
          }
        }

      }
    });
  }

}
