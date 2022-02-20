import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpBackend
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { REQUEST_URL } from 'src/environments/environment';
import { URLS } from './shared/constant';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  private httpClient: HttpClient;

  constructor(
    private router: Router,
    private handler: HttpBackend,
  ) {
    this.httpClient = new HttpClient(handler);

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('access_token') == null) {
      localStorage.setItem('access_token', 'empty');
    }
    const request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    return next.handle(request).pipe(

      catchError((error: any) => {
        const url = this.router.url;
        if (error.error instanceof ErrorEvent) {
          return throwError(error);
        } else {

          if (error.status === 401 || error.status === 403) {

            // return this.refreshToken()
            //   .pipe(
            //     flatMap(
            //       (data) => {
            //         if (localStorage.getItem('access_token')) {
            //           localStorage.setItem('access_token', data['access_token']);
            //         } else {
            //           this.router.navigate([URLS.login]);
            //         }

            //         const reqe = request.clone({
            //           setHeaders: {
            //             // tslint:disable-next-line: no-string-literal
            //             Authorization: `Bearer ${data['access_token']}`
            //           }
            //         });
            //         return next.handle(reqe);
            //       }),
            //     catchError((err: any) => {
            //       if (err.status === 401 || err.status === 400 || err.status === 403) {
            //         localStorage.clear();
            //         this.router.navigate(['/']);
            //       }
            //       return throwError(err);
            //     }));
          } else {
            return throwError(error);
          }
        }

      })
    );
  }

  refreshToken(): Observable<any> {
    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic aGVhbHRoLXdlYjpoZWFsdGgtd2ViLXNlY3JldA=='
    });
    if (localStorage.getItem('refresh_token') == null) {
      localStorage.setItem('refresh_token', 'empty');
    }
    const body = `grant_type=refresh_token&refresh_token=${localStorage.getItem('refresh_token')}`;

    return this.httpClient.post(`${REQUEST_URL}/oauth/token`, body,
      { headers: header });
  }
}
