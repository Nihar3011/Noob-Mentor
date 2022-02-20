import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { URLS } from "src/app/shared/constant";

@Component({
  selector: "app-view-profile",
  templateUrl: "./profile-view.component.html",
})
export class ProfileViewComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  goToChat(){
    this.router.navigateByUrl(URLS.chat);

  }
}
