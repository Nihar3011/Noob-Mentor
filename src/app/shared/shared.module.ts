import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NoDataComponent } from './component/no-data/no-data.component';
import { MessageService } from './service/message/message.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [NoDataComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ToastrModule.forRoot({}),
  ],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
