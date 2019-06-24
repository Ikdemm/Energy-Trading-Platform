import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  uri = "http://localhost:4000/users";

  public getUserAddress(userdId) {
    return this.http.get(`${this.uri}`);
  }

  public editUser(user) {
    console.log(user);
    this.http
      .post(`${this.uri}/update`, user)
      .subscribe(res => console.log("User updated successfuly"));
  }

  constructor(private http: HttpClient) {}
}
