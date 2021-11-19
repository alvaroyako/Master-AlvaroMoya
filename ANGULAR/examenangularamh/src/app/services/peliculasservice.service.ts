import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Global';
import { Pelicula } from '../Models/Pelicula';

@Injectable()
export class PeliculasserviceService {

  constructor(private _http: HttpClient) { }

  getGeneros(): Observable<any> {
    var request = "/api/Generos"
    var url = Global.urlpeliculas + request;
    return this._http.get(url)
  }

  getNacionalidad(): Observable<any> {
    var request = "/api/Nacionalidades"
    var url = Global.urlpeliculas + request;
    return this._http.get(url)
  }

  getPeliculaGenero(idgenero: number): Observable<any> {
    var request = "/api/Peliculas/PeliculasGenero/" + idgenero
    var url = Global.urlpeliculas + request;
    return this._http.get(url)
  }


  getPeliculaNacionalidad(idnacionalidad: number): Observable<any> {
    var request = "/api/Peliculas/PeliculasNacionalidad/" + idnacionalidad
    var url = Global.urlpeliculas + request;
    return this._http.get(url)
  }

  buscarPelicula(titulo: string): Observable<any> {
    var request = "/api/Peliculas/PeliculasTitulo/" + titulo;
    var url = Global.urlpeliculas + request;
    return this._http.get(url)
  }

  getPeliculas(): Observable<any> {
    var request = "/api/Peliculas"
    var url = Global.urlpeliculas + request;
    return this._http.get(url)
  }

  modificarPelicula(idpelicula: number, idgenero: number): Observable<any> {
    var body = "";
    var request = "/api/Peliculas/UpdatePeliculaGenero/" + idpelicula + "/" + idgenero
    var url = Global.urlpeliculas + request;
    return this._http.put(url, body)
  }
}
