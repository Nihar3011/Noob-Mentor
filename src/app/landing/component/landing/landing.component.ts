import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { URLS } from "src/app/common/constants/constant";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void { }

  goToLogin() {
    this.router.navigateByUrl(URLS.login);
  }
}
