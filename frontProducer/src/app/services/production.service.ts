import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders()
    .append("Access-Control-Allow-Origin", "*")
    .append("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,PUT,OPTIONS")
    .append(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, X-Auth-Token, content-type"
    )
};

const proxyurl = "https://cors-anywhere.herokuapp.com/";
@Injectable()
export class ProductionService {
  constructor(private _http: HttpClient) {}

  getProduction(code) {
    return this._http.get(
      proxyurl +
        "http://api.solcast.com.au/rooftop_sites/" +
        code +
        "/estimated_actuals?format=json&api_key=jR4Iuw5LMiT-2QtINhWXis28TvqaobNt",
      httpOptions
    );
  }

  dailyForecast(code) {
    return this._http.get(
      proxyurl +
        "http://api.solcast.com.au/rooftop_sites/" +
        code +
        "/estimated_actuals?format=json&api_key=jR4Iuw5LMiT-2QtINhWXis28TvqaobNt",
      httpOptions
    );
  }
}
