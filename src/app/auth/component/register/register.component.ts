import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { URLS } from "src/app/shared/constant";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  goToDetails() {
    this.router.navigateByUrl(URLS.details);
  }
}
