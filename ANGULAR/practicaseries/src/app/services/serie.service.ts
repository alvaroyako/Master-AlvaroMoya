import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Global';
import { Personaje } from '../Models/Personaje';

@Injectable()
export class SerieService {

  constructor(private _http: HttpClient) { }

  getSeries(): Observable<any> {
    var request="/api/Series"
    var url = Global.urlseries+request;
    return this._http.get(url)
  }

  getPersonajes(): Observable<any> {
    var request="/api/Personajes"
    var url = Global.urlseries+request;
    return this._http.get(url)
  }

  getSeriesId(id:number):Observable<any>{
    var request="/api/Series/"+id
    var url = Global.urlseries+request;
    return this._http.get(url)
  }

  getPersonajesId(id:number):Observable<any>{
    var request="/api/Series/PersonajesSerie/"+id
    var url = Global.urlseries+request;
    return this._http.get(url)
  }

  insertarPersonaje(pj:Personaje):Observable<any>{
    var request="/api/Personajes"
    var url = Global.urlseries+request;
    return this._http.post(url,pj)
  }

  modificarPersonaje(idpersonaje:number,idserie:number):Observable<any>{
    var body="";
    var request="/api/Personajes/"+idpersonaje+"/"+idserie
    var url = Global.urlseries+request;
    return this._http.put(url,body)
  }
}
