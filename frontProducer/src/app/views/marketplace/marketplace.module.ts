import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarketplaceComponent } from "./marketplace.component";
import { MarketplaceRoutingModule } from "./marketplace-routing.module";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../../material";
import { AddOfferComponent } from "./add-offer/add-offer.component";
import { ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [MarketplaceComponent, AddOfferComponent, AddOfferComponent, LinkComponent],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    NgSelectModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  entryComponents: [AddOfferComponent, LinkComponent]
})
export class MarketplaceModule {}
