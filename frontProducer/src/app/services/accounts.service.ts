import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Account } from "../models/account.model";

@Injectable({
  providedIn: "root"
})
export class AccountsService {
  uri = "http://localhost:4000/accounts";

  accounts: Account[];

  constructor(private http: HttpClient) {}

  addAccount(address, isProducer) {
    const obj = {
      address: address,
      isUsed: false,
      isProducer: isProducer
    };
    console.log(obj);
    this.http
      .post(`${this.uri}/add`, obj)
      .subscribe(res => console.log("Account added successfuly"));
  }

  getAccounts() {
    return this.http.get(`${this.uri}`);
  }

  updateAccount(obj) {
    console.log("updated");
    return this.http.post(`${this.uri}/update `, obj);
  }

  deleteAccount(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }

  loadAccounts() {
    this.getAccounts().subscribe((data: Account[]) => {
      this.accounts = data;
    });
  }
}
