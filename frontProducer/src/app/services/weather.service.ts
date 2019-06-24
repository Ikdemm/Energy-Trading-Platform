import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class WeatherService {
  constructor(private _http: HttpClient) {}

  dailyForecast() {
    return this._http.get(
      "http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=faacdc81aee2970f4d2f7f8161d19443"
    );
  }
}
