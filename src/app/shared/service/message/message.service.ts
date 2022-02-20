import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { toasterConfig } from '../../constant';

@Injectable({
  providedIn: 'root'
})

/**
 * Message Service created for showings toaster using ngx-toastr package
 */

export class MessageService {

  toasterConfig = toasterConfig;
  constructor(private toastr: ToastrService) { }


  // available types 'success', 'error', 'info', 'warning'
  // this four fucntions should be converted to one but currently i don't know how to do it.

  /**
   * @description below all four functions used to show various toaster messages
   * @param message // used to show message
   * @param title // used to title message
   *
   */

  showSuccessMessage(message: string, title?: string): void {
   this.toastr.success(message, title, this.toasterConfig);
  }

  showErrorMessage(message: string, title?: string): void {
   this.toastr.error(message, title, this.toasterConfig);
  }

  showInfoMessage(message: string, title?: string): void {
   this.toastr.info(message, title, this.toasterConfig);
  }

  showWarningMessage(message: string, title?: string): void {
   this.toastr.warning(message, title, this.toasterConfig);
  }

}
