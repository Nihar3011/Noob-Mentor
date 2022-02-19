import { Component, OnInit } from "@angular/core";
// import { LoginService } from "../../service/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(
    // private loginService: LoginService
  ) { }

  ngOnInit(): void { }

  login() {
    console.log('Hiii');
    
    // this.loginService.login({
    //   "email": "demo@example.com",
    //   "password": "1234",
    //   "roleId": "1"
    // }).subscribe((data) => {
    //   console.log(data);
      
    // })
  }
}
