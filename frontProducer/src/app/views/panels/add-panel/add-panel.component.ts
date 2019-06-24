import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PanelsService } from "../../../services/panels.service";
import { MatDialogRef } from "@angular/material";
import { Panel } from "../../../models/panel.modal";
import { AuthenticationService } from "../../../services/authentication.service";
import { User } from "../../../models/user.modal";

@Component({
  selector: "app-add-panel",
  templateUrl: "./add-panel.component.html",
  styleUrls: ["./add-panel.component.scss"]
})
export class AddPanelComponent implements OnInit {
  addPanelForm: FormGroup;
  current: User = new User();

  constructor(
    private fb: FormBuilder,
    private panelService: PanelsService,
    private dialogRef: MatDialogRef<AddPanelComponent>,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.getCurrent();
  }

  getCurrent() {
    this.authenticationService.dashboard().subscribe(
      data => {
        console.log(data);
        this.current = data.user;
      },
      err => {
        console.error(err);
      }
    );
  }

  createForm() {
    this.addPanelForm = this.fb.group({});
  }

  addPanel(number, manufacturer, cellsNumber, installationDate, STCOutput) {
    let obj = new Panel();
    (obj.number = number),
      (obj.manufacturer = manufacturer),
      (obj.cellsNumber = cellsNumber),
      (obj.installationDate = installationDate),
      (obj.STCOutput = STCOutput),
      (obj.state = true),
      (obj.owner = this.current.address);

    console.log(this.current.address);

    this.panelService.addPanel(obj);
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
