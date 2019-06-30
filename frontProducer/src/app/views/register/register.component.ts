import { Component } from "@angular/core";
import {
  AuthenticationService,
  TokenPayload
} from "../../services/authentication.service";
import { Router } from "@angular/router";
import { AccountsService } from "../../services/accounts.service";
import { User } from "../../models/user.modal";
import { Account } from "../../models/account.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private accountsService: AccountsService
  ) {}

  governorates = [
    "Ariana",
    "Béja",
    "Ben Arous",
    "Bizerte",
    "Gabès",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Kef",
    "Mahdia",
    "Manouba",
    "Medenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tatouine",
    "Tozeur",
    "Tunis",
    "Zaghouen"
  ];

  credentials: TokenPayload = {
    email: "",
    password: ""
  };

  users: User[];
  accounts: Account[];
  availableAddress;
  public isProducer = false;

  changeRole() {
    this.isProducer = !this.isProducer;
    console.log(this.isProducer);
  }

  // ------------------ Registration methods ------------------------ //
  register(email, password, username, governorate) {
    let user = new User();
    user.email = email;
    user.password = password;
    user.username = username;
    user.isProducer = this.isProducer;
    user.governorate = governorate;
    user.rating = 0;
    user.address = "";

    this.accountsService.getAccounts().subscribe((data: Account[]) => {
      this.accounts = data;
      const availableAddress = this.getAvailableAddress(this.isProducer);
      console.log(availableAddress);
      let finalUser = {
        user: {
          email: user.email,
          password: user.password,
          username: user.username,
          isProducer: this.isProducer,
          governorate: user.governorate,
          rating: 0,
          address: availableAddress
        }
      };

      console.log(finalUser);
      this.saveUser(finalUser);
    });
  }

  markAsUsed(account: Account) {
    let obj = new Account();

    obj._id = account._id;
    obj.address = account.address;
    obj.isProducer = account.isProducer;
    obj.isUsed = true;
    console.log(obj);
    this.accountsService.updateAccount(obj).subscribe(data => {
      console.log(data);
    });
  }

  getAvailableAddress(isProducer) {
    //Initialisation
    let i = 0,
      available = false,
      current = new Account();

    // if Producer
    if (isProducer) {
      // Getting Available Producer Address
      do {
        current = this.accounts[i];
        console.log("current: " + current);
        available = isProducer && !current.isUsed;
        i++;
      } while (!available && i <= this.accounts.length);

      // Returning Producer Address if available
      if (i > this.accounts.length) {
        console.log("no address available");
      } else {
        this.markAsUsed(this.accounts[i - 1]);
        return current.address;
      }
    } // If Consumer
    else {
      // Getting Available Consumer Address
      do {
        current = this.accounts[i];
        available = !current.isProducer && !current.isUsed;
        i++;
      } while (!available && i <= this.accounts.length);

      // Returning Consumer Address if Available
      if (i > this.accounts.length) {
        console.log("no address available");
      } else {
        this.markAsUsed(this.accounts[i - 1]);
        return current.address;
      }
    }
  }

  //saving the new user to the db
  saveUser(user) {
    this.authService.register(user).subscribe(
      data => {
        localStorage.setItem("token", data.token);
        this.router.navigateByUrl("/dashboard");
        this.authService.token = data.token;
      },
      err => {
        console.error(err);
      }
    );
  }

  async ngOnInit() {
    this.isProducer = false;
    await new Promise((resolve, reject) => setTimeout(resolve, 1500));
  }
}
