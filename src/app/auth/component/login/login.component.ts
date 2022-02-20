import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { URLS } from "src/app/shared/constant";
import { LoginService } from "../../service/login.service";
// import { LoginService } from "../../service/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  login() {
    console.log('Hiii');
    console.log(this.loginForm.value);

    const loginFormData = this.loginForm.value;
    loginFormData.role = 'noob';
    this.loginService.login(loginFormData).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('access_token', res.data.accessToken);
      localStorage.setItem('refresh_token', res.data.refreshToken);
      this.router.navigateByUrl('/');
    })
  }

  goToRegister(){
    this.router.navigateByUrl(URLS.register);
  }


}
