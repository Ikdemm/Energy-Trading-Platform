import { Component, OnInit } from "@angular/core";
import { Panel } from "../../../models/panel.modal";
import { FormBuilder, FormGroup } from "@angular/forms";
import { PanelsService } from "../../../services/panels.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-edit-panels",
  templateUrl: "./edit-panels.component.html",
  styleUrls: ["./edit-panels.component.scss"]
})
export class EditPanelsComponent implements OnInit {
  editPanelForm: FormGroup;

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

  updatePanel(number, manufacturer, cellsNumber, installationDate, STCOutput) {
    let obj = new Panel();
    obj._id = this.panel._id;
    obj.number = number;
    obj.manufacturer = manufacturer;
    obj.cellsNumber = cellsNumber;
    obj.installationDate = installationDate;
    obj.STCOutput = STCOutput;
    obj.state = true;

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
