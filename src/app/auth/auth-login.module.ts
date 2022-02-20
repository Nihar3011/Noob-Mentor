import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AuthLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthLoginModule { }
