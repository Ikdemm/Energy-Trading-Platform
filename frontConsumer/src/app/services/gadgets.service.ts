import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GadgetsService {
  uri = "http://localhost:4000/gadgets";

  constructor(private http: HttpClient) {}

  addGadget(name, type, watt, amp, volt, state, owner) {
    const obj = {
      name: name,
      type: type,
      watt: watt,
      amp: amp,
      volt: volt,
      state: state,
      owner: owner
    };
    console.log(obj);
    this.http
      .post(`${this.uri}/add`, obj)
      .subscribe(res => console.log("Gadget added successfuly"));
  }

  getGadgets() {
    return this.http.get(`${this.uri}`);
  }

  updateGadget(obj) {
    console.log("updated");
    return this.http.post(`${this.uri}/update`, obj);
  }

  deleteGadget(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
