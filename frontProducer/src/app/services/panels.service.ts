import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PanelsService {
  uri = "http://localhost:4000/panels";

  constructor(private http: HttpClient) {}

  addPanel(obj) {
    console.log(obj);
    this.http
      .post(`${this.uri}/add`, obj)
      .subscribe(res => console.log("Panel added successfuly"));
  }

  getPanels() {
    return this.http.get(`${this.uri}`);
  }

  updatePanel(obj) {
    return this.http.post(`${this.uri}/update/`, obj);
  }

  deletePanel(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
