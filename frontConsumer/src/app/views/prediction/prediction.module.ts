import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PredictionComponent } from "./prediction.component";
import { PredictionRoutingModule } from "./prediction-routing.module";
import { WeatherService } from "../../services/weather.service";
import { ProductionService } from "../../services/production.service";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "../../material";
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [PredictionComponent],
  imports: [
    CommonModule,
    PredictionRoutingModule,
    HttpClientModule,
    MaterialModule,
    MatIconModule
  ],
  providers: [WeatherService, ProductionService]
})
export class PredictionModule {}
