import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GadgetRoutingModule } from "./gadget-routing.module";
import { GadgetComponent } from "./gadget.component";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../../material";
import { AddGadgetComponent } from "./add-gadget/add-gadget.component";
import { EditGadgetComponent } from "./edit-gadget/edit-gadget.component";
import { MatSelectModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { GadgetsService } from "../../services/gadgets.service";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations: [GadgetComponent, AddGadgetComponent, EditGadgetComponent],
  imports: [
    CommonModule,
    GadgetRoutingModule,
    FormsModule,
    MaterialModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule
  ],
  entryComponents: [AddGadgetComponent, EditGadgetComponent],
  providers: [GadgetsService]
})
export class GadgetModule {}
