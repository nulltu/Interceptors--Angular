import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      console.log('estoy pasando por el interceptor')
      const headers = new HttpHeaders({
      'x-token': 'AKLJFKLASMF32432DFQFASAD'
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle( reqClone ).pipe(
      catchError( this.manejarError)
    );
    
  }

  manejarError( err: HttpErrorResponse){
    console.log('sucedio un error')
    console.warn(err)

    return throwError('error personalizado')
  }
}
