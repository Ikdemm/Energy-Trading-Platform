import { Component } from "@angular/core";
import {
  AuthenticationService,
  UserDetails
} from "../../services/authentication.service";
import { ProfileService } from "../../services/profile.service";
import { Router } from "@angular/router";
import { User } from "../../models/user.modal";
import { MatDialog } from "@angular/material";
import { FinancialComponent } from "./financial/financial.component";
import { UserService } from "../../services/users.service";
import { ClipboardService } from "ngx-clipboard";

@Component({
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent {
  details: UserDetails;
  user: User = new User();
  balance = 0;

  constructor(
    private auth: AuthenticationService,
    private prof: ProfileService,
    private router: Router,
    public dialog: MatDialog,
    private userService: UserService //private _clipboardService: ClipboardService
  ) {}

  goToRegister() {
    this.router.navigateByUrl("dashboard");
  }

  editProfile(username, email, governorate) {
    let obj = new User();
    // Unmodifiable attributes
    obj._id = this.user._id;
    obj.address = this.user.address;
    obj.isProducer = this.user.isProducer;
    obj.rating = this.user.rating;
    // new attributes
    obj.username = username;
    obj.email = email;
    obj.governorate = governorate;
    console.log(obj);
    this.userService.editUser(obj);
  }

  openFinancial(id): void {
    const dialogRef = this.dialog.open(FinancialComponent, {
      width: "400px",
      data: {}
    });
    // dialogRef.afterClosed().subscribe(res => {
    // });
  }

  Balance() {
    return this.prof
      .getAccountBalance({ account: this.user.address })
      .subscribe(data => {
        this.balance = Number(data);
      });
  }

  /*copy(text: string) {
    this._clipboardService.copyFromContent("content");
  }*/

  ngOnInit() {
    this.auth.dashboard().subscribe(
      data => {
        this.user = data["user"];
        this.Balance();
      },
      err => {
        console.error(err);
      }
    );
  }
}
