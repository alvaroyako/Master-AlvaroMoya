import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Global';
import { Apuesta } from '../Models/Apuesta';

@Injectable()
export class ApuestasService {

  constructor(private _http: HttpClient) { }

  getEquipos(): Observable<any> {
    var request = "/api/Equipos"
    var url = Global.urlapuestas + request;
    return this._http.get(url)
  }

  getJugadores(): Observable<any> {
    var request = "/api/Jugadores"
    var url = Global.urlapuestas + request;
    return this._http.get(url)
  }

  getApuestas(): Observable<any> {
    var request = "/api/Apuestas"
    var url = Global.urlapuestas + request;
    return this._http.get(url)
  }

  getDetallesEquipo(idequipo: string): Observable<any> {
    var request = "/api/Equipos/" + idequipo;
    var url = Global.urlapuestas + request;
    return this._http.get(url)
  }

  getDetallesJugador(idjugador: string): Observable<any> {
    var request = "/api/Jugadores/" + idjugador;
    var url = Global.urlapuestas + request;
    return this._http.get(url)
  }

  getListaJugadores(idequipo: string): Observable<any> {
    var request = "/api/Jugadores/JugadoresEquipo/" + idequipo;
    var url = Global.urlapuestas + request;
    return this._http.get(url)
  }

  realizarApuesta(apuesta: Apuesta): Observable<any> {
    var json = JSON.stringify(apuesta)
    var header = new HttpHeaders().set("Content-Type", "application/json")
    var request = "/api/Apuestas";
    var url = Global.urlapuestas + request;
    return this._http.post(url, json, { headers: header })
  }

  buscarJugador(nombre:string): Observable<any> {
    var request = "/api/Jugadores/BuscarJugadores/"+nombre;
    var url = Global.urlapuestas2 + request;
    return this._http.get(url)
  }

}
