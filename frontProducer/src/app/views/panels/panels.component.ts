import { Component, OnInit } from "@angular/core";
import { Panel } from "../../models/panel.modal";
import { PanelsService } from "../../services/panels.service";
import { AddPanelComponent } from "./add-panel/add-panel.component";
import { EditPanelsComponent } from "./edit-panels/edit-panels.component";
import { MatDialog } from "@angular/material";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../../models/user.modal";
import { ProductionService } from "../../services/production.service";
import panels from "../../../assets/json/panels.json";

@Component({
  selector: "app-panels",
  templateUrl: "./panels.component.html",
  styleUrls: ["./panels.component.scss"]
})
export class PanelsComponent implements OnInit {
  panels: Panel[];
  total = 0;
  current: User = new User();
  code;

  constructor(
    private panelService: PanelsService,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private productionService: ProductionService
  ) {
    console.log(panels);
  }

  ngOnInit() {
    this.getCurrent();
  }

  openAddPanel(): void {
    const dialogRef = this.dialog.open(AddPanelComponent, { width: "250px" });
    dialogRef.afterClosed().subscribe(res => {
      this.getListPanels();
    });
  }

  openEditPanel(panel: Panel): void {
    const dialogRef = this.dialog.open(EditPanelsComponent, { width: "250px" });
    dialogRef.componentInstance.panel = panel;
    dialogRef.afterClosed().subscribe(res => {
      this.getListPanels();
      this.getTotal();
    });
  }

  deletePanel(id) {
    this.panelService.deletePanel(id).subscribe(res => {
      console.log("Deleted");
      this.getListPanels();
      this.getTotal();
    });
  }

  getColor(panel: Panel) {
    return panel.state ? "#4b8b3b" : "#b53737";
  }

  changeState(panel: Panel) {
    panel.state = !panel.state;
    let obj = new Panel();
    obj._id = panel._id;
    obj.manufacturer = panel.manufacturer;
    obj.cellsNumber = panel.cellsNumber;
    obj.tilt = panel.tilt;
    obj.azimuth = panel.azimuth;
    obj.installationDate = panel.installationDate;
    obj.state = panel.state;
    this.panelService.updatePanel(obj).subscribe(data => {
      console.log(data);
    });

    this.getTotal();
  }

  getTotal() {
    this.total = 0;
    this.panels.forEach(element => {
      console.log(element);
      if (element.state) {
        this.productionService.getProduction(this.code).subscribe(data => {
          this.total += data.estimated_actuals[0].pv_estimate;
          console.log(this.total);
        });
      }
    });
    console.log(this.total);
    return this.total;
  }

  getCurrent() {
    this.authenticationService.dashboard().subscribe(
      data => {
        console.log(data);
        this.current = data.user;
        console.log(this.current);
        this.getListPanels();
        console.log(panels);
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

  getListPanels() {
    this.panelService.getPanels().subscribe((data: Panel[]) => {
      this.panels = data;
      let current = this.current;
      let panels = [];
      data.forEach(function(panel) {
        if (panel.owner === current.address) {
          panels.push(panel);
        }
      });
      this.panels = panels;
      console.log(this.panels);
      this.getTotal();
    });
  }
}
