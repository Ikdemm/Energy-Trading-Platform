import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DialogData } from "./DialogData";

import { WeatherService } from "./services/weather.service";
import { AuthenticationService } from "./services/authentication.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from "./app.component";

// Import containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";

const APP_CONTAINERS = [DefaultLayoutComponent];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
} from "@coreui/angular";

// Import 3rd party components
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material";
import { ProfileComponent } from "./views/profile/profile.component";
import { ProfileModule } from "./views/profile/profile.module";
import { AuthGuardService } from "./services/auth-guard.service";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ProfileModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    WeatherService,
    AuthenticationService,
    AuthGuardService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
