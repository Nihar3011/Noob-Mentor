import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { MessageService } from 'src/app/shared/service/message/message.service';
import { REQUEST_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService

  ) { }

  getMentors(data) {
    return this.http.get(`${REQUEST_URL}/user/get-mentors`, {
      params: {
        take: data.take
      }
    }).pipe(map((response) => {
      return response;
    }), catchError((error): any => {
      console.log(error, 'innn');

      this.messageService.showErrorMessage(error.message);
    }));
  }
}
