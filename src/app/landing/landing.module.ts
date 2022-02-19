import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './component/landing/landing.component';
import { AuthNavbarComponent } from '../layouts/component/auth-navbar/auth-navbar.component';
import { FooterComponent } from '../layouts/component/footer/footer.component';


@NgModule({
  declarations: [
    LandingComponent,
    AuthNavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
