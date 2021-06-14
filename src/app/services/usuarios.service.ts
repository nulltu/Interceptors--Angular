import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import { catchError, map } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  obtenerUsuario(){
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Rusbent Matta');


    return this.http.get('https://reqres2.in/api/user',
      {
        params,
        // headers
      }).pipe(
        map( resp => {
          // @ts-ignore
          return resp['data'];
        }),
    );
  }

}
