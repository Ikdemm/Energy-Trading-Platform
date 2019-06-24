import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PanelsComponent } from "./panels.component";
import { PanelsRoutingModule } from "./panels-routing.module";
import { Ng2PageScrollModule } from "ng2-page-scroll";
import { MaterialModule } from "../../material";
import { MatSlideToggleModule } from "@angular/material";
import { AddPanelComponent } from "./add-panel/add-panel.component";
import { EditPanelsComponent } from "./edit-panels/edit-panels.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatSelectModule } from "@angular/material";
@NgModule({
  declarations: [PanelsComponent, AddPanelComponent, EditPanelsComponent],
  imports: [
    CommonModule,
    PanelsRoutingModule,
    Ng2PageScrollModule,
    MaterialModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule
  ],
  entryComponents: [AddPanelComponent, EditPanelsComponent]
})
export class PanelsModule {}
