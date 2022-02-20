import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthNavbarComponent } from './component/auth-navbar/auth-navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthNavbarComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule {   


}
