import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { AccountsService } from "./accounts.service";
import { forEach } from "@angular/router/src/utils/collection";
import { Account } from "../models/account.model";
import { User } from "../models/user.modal";

export interface UserDetails {
  _id: string;
  email: string;
  address: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  user: {
    _id: string;
    email: string;
    token: string;
  };
}

export interface TokenPayload {
  email: string;
  password: string;
}

@Injectable()
export class AuthenticationService {
  token: string;

  uri = "http://localhost:4000";

  accounts: Account[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private accountsService: AccountsService
  ) {}

  private saveToken(token: string): void {
    localStorage.setItem("mean-token", token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("mean-token");
    }
    return this.token;
  }

  public logout(): void {
    this.token = "";
    window.localStorage.removeItem("mean-token");
    this.router.navigateByUrl("/");
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();

    console.log(user.exp);
    console.log(user.address);
    return user.exp > Date.now() / 1000;
  }

  private request(
    method: "post" | "get",
    type: "login" | "register" | "current",
    user?: TokenPayload
  ): Observable<any> {
    let base;

    if (method === "post") {
      base = this.http.post(`${this.uri}/api/users/${type}`, user);
    } else {
      base = this.http.get(`${this.uri}/api/users/${type}`, {
        headers: { Authorization: `Token ${this.getToken()}` }
      });
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.user.token) {
          this.saveToken(data.user.token);
        }
        return data;
      })
    );

    return request;
  }

  getAccounts() {
    this.accountsService.getAccounts().subscribe((data: Account[]) => {
      this.accounts = data;
      console.log(this.accounts);
    });
  }

  getUnusedAddress(producer) {
    this.accountsService.getAccounts().subscribe((data: Account[]) => {
      this.accounts = data;
      console.log(this.accounts);
      let i = 0;
      let notFound = true;
      let current = null;
      if (producer) {
        do {
          notFound = !this.accounts[i].isProducer && this.accounts[i].isUsed;
          i++;
          current = this.accounts[i];
        } while (notFound && i < this.accounts.length);
        console.log(current.address);
        return current.address;
      } else {
        do {
          notFound = this.accounts[i].isProducer && this.accounts[i].isUsed;
          current = this.accounts[i];
          i++;
        } while (notFound && i == this.accounts.length);
        console.log(current.address);
        return current.address;
      }
    });
  }

  public register(user): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.uri}/api/users/`, user);
  }

  public getUsers() {
    return this.http.get(`${this.uri}/users/`);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request("post", "login", user);
  }

  public getCurrent(): Observable<any> {
    return this.request("get", "current");
  }

  public dashboard(): Observable<any> {
    return this.request("get", "current");
  }
}
