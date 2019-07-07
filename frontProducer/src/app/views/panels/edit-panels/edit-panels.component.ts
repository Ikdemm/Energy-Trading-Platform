import { Component, OnInit } from "@angular/core";
import { Panel } from "../../../models/panel.modal";
import { FormBuilder, FormGroup } from "@angular/forms";
import { PanelsService } from "../../../services/panels.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";
import { User } from "../../../models/user.modal";

@Component({
  selector: "app-edit-panels",
  templateUrl: "./edit-panels.component.html",
  styleUrls: ["./edit-panels.component.scss"]
})
export class EditPanelsComponent implements OnInit {
  editPanelForm: FormGroup;
  current: User = new User();

  panel: Panel;

  constructor(
    private fb: FormBuilder,
    private panelService: PanelsService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<EditPanelsComponent>
  ) {
    this.createForm();
  }

  createForm() {
    this.editPanelForm = this.fb.group({});
  }

  updatePanel(manufacturer, cellsNumber, installationDate, tilt, azimuth) {
    let obj = new Panel();
    obj._id = this.panel._id;
    obj.manufacturer = manufacturer;
    obj.cellsNumber = cellsNumber;
    obj.installationDate = installationDate;
    obj.tilt = tilt;
    obj.azimuth = azimuth;
    obj.state = true;
    console.log(obj);

    this.panelService.updatePanel(obj).subscribe(data => {
      console.log(data);
    });

    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
