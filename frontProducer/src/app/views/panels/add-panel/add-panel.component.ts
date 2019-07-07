import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, NgForm } from "@angular/forms";
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
  @ViewChild("f") addPanelForm: NgForm;
  current: User = new User();

  constructor(
    private panelService: PanelsService,
    private dialogRef: MatDialogRef<AddPanelComponent>,
    private authenticationService: AuthenticationService
  ) {}

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

  addPanel() {
    console.log("submitted!");
    let obj = new Panel();
    obj.manufacturer = this.addPanelForm.value.manufacturer;
    obj.capacity = this.addPanelForm.value.capacity;
    obj.tilt = this.addPanelForm.value.tilt;
    obj.azimuth = this.addPanelForm.value.azimuth;
    obj.owner = this.current.address;
    obj.state = true;

    this.panelService.addPanel(obj);
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
