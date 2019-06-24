import { Component } from "@angular/core";
import {
  AuthenticationService,
  TokenPayload
} from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  credentials: TokenPayload = {
    email: "",
    password: ""
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/dashboard");
      },
      err => {
        console.error(err);
      }
    );
  }

  getUsers() {
    console.log(this.auth.getUsers());
  }

  goToRegister() {
    this.router.navigateByUrl("/register");
  }
}
