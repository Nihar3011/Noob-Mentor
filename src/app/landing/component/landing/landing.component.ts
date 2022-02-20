import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { URLS } from "src/app/shared/constant";
import { LandingService } from "../../service/landing.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  mentors: any;
  constructor(
    private router: Router,
    private landingService: LandingService
  ) { }

  ngOnInit(): void {
    this.getMentors();
  }

  goToLogin() {
    this.router.navigateByUrl(URLS.login);
  }
  goToProfile() {
    this.router.navigateByUrl(URLS.profile);
  }

  getMentors() {
    const data = {
      take: 12,
    }
    this.landingService.getMentors(data).subscribe((res: any) => {
      this.mentors = res.data.rows;
      console.log(this.mentors);
    });
  }
}
