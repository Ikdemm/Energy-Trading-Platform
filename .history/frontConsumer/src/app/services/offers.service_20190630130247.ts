import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class OfferService {
  uri = "http://localhost:4000/match";

  constructor(private http: HttpClient) {}

  placeOffer(addrSeller, nameSeller, unitPrice, tokenNumber, debut, end) {
    let offer = {
      addrSeller,
      nameSeller,
      unitPrice,
      tokenNumber,
      debut,
      end
    };

    offer.addrSeller = addrSeller;
    offer.nameSeller = nameSeller;
    offer.unitPrice = unitPrice;
    offer.tokenNumber = tokenNumber;
    offer.debut = debut;
    offer.end = end;

    this.http
      .post(`${this.uri}/placeOffer`, offer, httpOptions)
      .subscribe(res => console.log("Offer added successfuly"));
  }

  getLengthOffers() {
    return this.http.get(`${this.uri}/getOffersLength`, httpOptions);
  }

  getListOffers(): Observable<string> {
    return this.http.get(`${this.uri}/getListOffers`, { responseType: "text" });
  }

  link(idOffer, Buyer, Seller) {
    this.http
      .post(
        `${this.uri}/link`,
        JSON.stringify(idOffer, Buyer, Seller),
        httpOptions
      )
      .subscribe(res => console.log("linked successfully"));
  }
}
