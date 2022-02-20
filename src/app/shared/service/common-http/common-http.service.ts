import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { serverUrl } from '../../constant';
import { ErrorHandlerService } from '../error-handler/error-handler.service';
import { Responsebody, RequestObj } from '../../interfaces/request';
import { MessageService } from '../message/message.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService,
    private sanitizer: DomSanitizer
  ) { }


  /**
   * @description: Common get method
   * @returns: Return the generic response
   */
  get<T>(requestObj: RequestObj<T>): Observable<T> {
    return this.http.get(serverUrl + requestObj.uri).pipe(
      map((response: Responsebody<T>) => {
        if (requestObj.message && requestObj.message.successMessage) {
          this.messageService.showSuccessMessage(requestObj.message.successMessage);
        }
        return response.Result;
      }),
      catchError((error) => {
        return this.errorHandlerService.handleError(error, requestObj.message || null);
      }));
  }

  /**
   *  @description: Common get method with custom error message
   *  @param uri: Pass the get url + query string parameters
   *  @returns: Return the generic response
   */
  getWithCustomErrorMessage<T>(uri: string): Observable<T> {
    return this.http.get(serverUrl + uri).pipe(
      map((response: Responsebody<T>) => {
        return response.Result;
      }));
  }

  /**
   * @description: Common Post method
   * @returns: Returns the inserted object
   */
  post<T, R>(requestObj: RequestObj<T>): Observable<R> {
    return this.http.post(serverUrl + requestObj.uri, requestObj.object).pipe(
      map((response: Responsebody<R>) => {
        if (requestObj.message && requestObj.message.successMessage) {
          this.messageService.showSuccessMessage(requestObj.message.successMessage);
        }
        return response.Result;
      }),
      catchError((error) => {
        return this.errorHandlerService.handleError(error, requestObj.message || null);
      }));
  }

  /**
   * @description: Post method with upoad progress response
   * @returns: Returns the upload progress percentage or the inserted object
   */
  postWithProgress<T, R>(requestObj: RequestObj<T>): Observable<R> {
    return this.http.post(serverUrl + requestObj.uri, requestObj.object, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map((event: any) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            const percentDone = Math.round(100 * event.loaded / event.total);
            return percentDone;
          case HttpEventType.Response:
            if (requestObj.message && requestObj.message.successMessage) {
              this.messageService.showSuccessMessage(requestObj.message.successMessage);
            }
            return event.body.Result;
        }
      }),
      catchError((error) => {
        return this.errorHandlerService.handleError(error, requestObj.message || null);
      })
    );
  }
  /**
   * @description: Common Put method
   * @returns: Returns the updated object
   */
  put<T, R>(requestObj: RequestObj<T>): Observable<R> {
    return this.http.put(serverUrl + requestObj.uri, requestObj.object).pipe(
      map((response: Responsebody<R>) => {
        if (requestObj.message && requestObj.message.successMessage) {
          this.messageService.showSuccessMessage(requestObj.message.successMessage);
        }
        return response.Result;
      }),
      catchError((error) => {
        return this.errorHandlerService.handleError(error, requestObj.message || null);
      }));
  }

  /**
   * @description: Common Delete method
   * @returns: Returns the generic type
   */
  delete<T>(requestObj: RequestObj<T>): Observable<T> {
    return this.http.delete(serverUrl + requestObj.uri).pipe(
      map((response: Responsebody<T>) => {
        if (requestObj.message && requestObj.message.successMessage) {
          this.messageService.showSuccessMessage(requestObj.message.successMessage);
        }
        return response.Result;
      }),
      catchError((error) => {
        return this.errorHandlerService.handleError(error, requestObj.message || null);
      }));
  }

  /**
   * @description: Common Delete method using body
   * @param uri: Pass the delete url + query string parameters
   * @param body: Pass the object for the delete
   * @param message: Pass custom error message if wanted to show custom error message
   * @returns: Returns the generic type
   */
  deleteWithBody<T, R>(requestObj: RequestObj<T>): Observable<R> {
    return this.http.request('delete', serverUrl + requestObj.uri, { body: requestObj.object }).pipe(
      map((response: Responsebody<R>) => {
        if (requestObj.message && requestObj.message.successMessage) {
          this.messageService.showSuccessMessage(requestObj.message.successMessage);
        }
        return response.Result;
      }),
      catchError((error) => {
        return this.errorHandlerService.handleError(error, requestObj.message || null);
      }));
  }

  // /**
  //  * @description: Common resource upload method
  //  * @param url: Pass the upload url
  //  * @param formdata: Pass the upload file formdata name
  //  * @param message: Pass custom error message if wanted to show custom error message
  //  */
  // uploadResource<T>(requestObj: RequestObj<T>): Observable<any> {
  //   return this.http.post(serverUrl + requestObj.uri, requestObj.formdata, {
  //     reportProgress: true,
  //     observe: 'events',
  //     responseType: 'text'
  //   }).pipe(
  //     map((response) => {
  //       if (requestObj.message && requestObj.message.successMessage) {
  //         this.messageService.showSuccessMessage(requestObj.message.successMessage);
  //       }
  //       return response;
  //     }),
  //     catchError((error) => {
  //       return this.errorHandlerService.handleError(error,
  //   requestObj.message || null);
  //     }));
  // }

  /**
   * @description: Common resource download method
   * @param url: Pass the download resource url
   * @param message: Pass custom error message if wanted to show custom error message
   */
  downloadResource<T>(requestObj: RequestObj<T>): Observable<any> {
    return this.http.get(serverUrl + requestObj.uri, { responseType: 'blob' }).pipe(
      map((response) => {
        if (requestObj.message && requestObj.message.successMessage) {
          this.messageService.showSuccessMessage(requestObj.message.successMessage);
        }
        return response;
      }),
      catchError((error) => {
        return this.errorHandlerService.handleError(error, requestObj.message || null);
      }));
  }

  /**
   * @description get Secured Authorized resource data
   * @param url - Url to get resource
   * @returns logged in users profile data
   */
  getSecuredResource(uri: string): Observable<SafeUrl> {
    return this.http.get(serverUrl + uri, { responseType: 'blob', observe: 'body' }).pipe(
      map((response: Blob) => {
        return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(response));
      }));
  }

  getExternalUrls(url) {
    return this.http.get(url);
  }
}
