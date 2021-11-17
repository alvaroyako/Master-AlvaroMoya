import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Global';


@Injectable()
export class EmpleadoService {
  constructor(private _http: HttpClient) { }

  getEmpleadosSalario(salario: string): Observable<any> {
    var request = "/api/Empleados/EmpleadosSalario/" + salario;
    var url = Global.urlempleados + request;
    return this._http.get(url)
  }

  getEmpleados(): Observable<any> {
    var request = "/api/empleados";
    var url = Global.urlempleados + request;
    return this._http.get(url)
  }

  findEmpleado(idempleado: string): Observable<any> {
    var request = "api/empleados/" + idempleado;
    var url = Global.urlempleados + request;
    return this._http.get(url)
  }



}
