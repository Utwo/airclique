import { Component, OnInit } from "@angular/core";
import { StateService } from "./shared/state.service";
import { LoginService } from "./core/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Airclique Company";
  userName: string = "";
  constructor(
    public state: StateService,
    public loginService: LoginService,
    public router: Router
  ) {}

  ngOnInit(): void {
    if (this.state.isLoggedIn()) {
      this.userName = this.state.getUser()["name"];
      console.log(this.userName);
    }
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(["/"]);
  }
}
