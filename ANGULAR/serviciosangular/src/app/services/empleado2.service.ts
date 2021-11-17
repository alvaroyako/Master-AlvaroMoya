import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Global';


@Injectable()
export class Empleado2Service {

  constructor(private _http: HttpClient) { }

  getEmpleadosOficio(oficio: string): Observable<any> {
    var request = "/api/Empleados/EmpleadosOficio/" + oficio;
    var url = Global.urlempleados + request;
    return this._http.get(url)
  }

  getOficios(): Observable<any> {
    var request = "/api/Empleados/oficios";
    var url = Global.urlempleados + request;
    return this._http.get(url)
  }
}
