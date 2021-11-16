import { Injectable } from '@angular/core';
import { Global } from '../Global';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServicepersonasService {

  constructor(private _http: HttpClient) {

  }

  getPersonas(): Observable<any> {
    var url = Global.urlpersonas;
    return this._http.get(url)
  }

}
