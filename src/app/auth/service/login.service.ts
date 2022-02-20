import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { REQUEST_URL } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { MessageService } from 'src/app/shared/service/message/message.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpClient: HttpClient;
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    handler: HttpBackend
  ) {
    this.httpClient = new HttpClient(handler);

   }

  login(data) {
    return this.httpClient.post(`${REQUEST_URL}/user/login`, data).pipe(map((response) => {
      return response;
    }), catchError((error): any => {      
      this.messageService.showErrorMessage(error.message);
    }));
  }

}
