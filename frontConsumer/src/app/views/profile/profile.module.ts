import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { MaterialModule } from "../../material";
import { FinancialComponent } from "./financial/financial.component";
import { ClipboardModule } from "ngx-clipboard";
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//import { ToastModule } from "ng2-toastr/ng2-toastr";
//import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [ProfileComponent, FinancialComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule,
    MaterialModule,
    MatIconModule,
    ClipboardModule
    //BrowserModule,
    //BrowserAnimationsModule
    //ToastModule.forRoot()
  ],
  providers: [],
  entryComponents: [FinancialComponent]
})
export class ProfileModule {}
