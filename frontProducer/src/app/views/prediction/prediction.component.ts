import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
import { ProductionService } from "../../services/production.service";
import { Chart } from "chart.js";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../../models/user.modal";
import panels from "../../../assets/json/panels.json";
@Component({
  selector: "app-prediction",
  templateUrl: "./prediction.component.html",
  styleUrls: ["./prediction.component.scss"]
})
export class PredictionComponent implements OnInit {
  chart = [];
  production = [];
  code;
  current: User = new User();
  constructor(
    private _weather: WeatherService,
    private _production: ProductionService,
    private authenticationService: AuthenticationService
  ) {}

  getCurrent() {
    this.authenticationService.dashboard().subscribe(
      data => {
        console.log(data);
        this.current = data.user;
        console.log(this.current);
        let code = panels.filter(element => {
          return element.name == this.current.governorate;
        });
        this.code = code[0].code;
        console.log(this.code);
      },
      err => {
        console.error(err);
      }
    );
  }

  power() {
    /******************Power*********************/
    this._production.getProduction(this.code).subscribe(res => {
      const powerEstim = res["estimated_actuals"].map(res => res.pv_estimate);
      const dateEstim = res["estimated_actuals"].map(res => res.period_end);

      this.chart = new Chart("canvas", {
        type: "line",
        data: {
          labels: dateEstim,
          datasets: [
            {
              data: powerEstim,
              borderColor: "#3cba9f",
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                display: true,
                lscaleLabel: {
                  display: true,
                  labelString: "Date"
                }
              }
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Power KW"
                }
              }
            ]
          }
        }
      });
    });
  }

  weather() {
    /******************Temperature*********************/

    this._weather.dailyForecast().subscribe(res => {
      const temp_max = res["list"].map(res => res.main.temp_max - 273.15);
      const temp_min = res["list"].map(res => res.main.temp_min - 273.15);
      const alldates = res["list"].map(res => res.dt);

      const weatherDates = [];
      alldates.forEach(res => {
        const jsdate = new Date(res * 1000);
        weatherDates.push(
          jsdate.toLocaleTimeString("en", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            hour12: false,
            minute: "numeric"
          })
        );
      });

      this.chart = new Chart("canvas", {
        type: "line",
        data: {
          labels: weatherDates,
          datasets: [
            {
              data: temp_max,
              borderColor: "#3cba9f",
              fill: false
            },
            {
              data: temp_min,
              borderColor: "#ffcc00",
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                display: true,
                lscaleLabel: {
                  display: true,
                  labelString: "Date"
                }
              }
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Temperature °C"
                }
              }
            ]
          }
        }
      });
    });
  }

  ngOnInit() {
    this.weather();
    this.getCurrent();
  }
}
