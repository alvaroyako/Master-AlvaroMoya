import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Global';
import { Departamento } from '../Models/departamento';


@Injectable()
export class DepartamentoService {

  constructor(private _http: HttpClient) { }

  getDepartamentos(): Observable<any> {
    var request = "/api/Departamentos";
    var url = Global.urldepartamentos + request;
    return this._http.get(url);
  }

  insertarDepartamento(dep: Departamento): Observable<any> {
    var json = JSON.stringify(dep)
    var header = new HttpHeaders().set("Content-Type", "application/json")
    var request = "/api/Departamentos";
    var url = Global.urldepartamentos + request;
    return this._http.post(url, json, { headers: header });
  }
}
