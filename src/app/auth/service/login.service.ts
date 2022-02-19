// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { REQUEST_URL } from 'src/environments/environment';
// import { map, catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   constructor(
//     private http: HttpClient
//   ) { }

//   login(data) {
//     return this.http.post(`${REQUEST_URL}/api/user/login`, data).pipe(map((response) => {
//       return response;
//     }), catchError((error): any => {
//       // this.messageService.showErrorMessage(error.message);
//     }));
//   }

// }
