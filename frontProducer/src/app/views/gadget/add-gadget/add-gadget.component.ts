import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GadgetsService } from "../../../services/gadgets.service";
import { User } from "../../../models/user.modal";
import { AuthenticationService } from "../../../services/authentication.service";

@Component({
  selector: "app-add-gadget",
  templateUrl: "./add-gadget.component.html",
  styleUrls: ["./add-gadget.component.scss"]
})
export class AddGadgetComponent implements OnInit {
  addForm: FormGroup;
  current: User = new User();

  constructor(
    private fb: FormBuilder,
    private gs: GadgetsService,
    public dialogRef: MatDialogRef<AddGadgetComponent>,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  createForm() {
    this.addForm = this.fb.group({
      gadget_name: ["", Validators.required],
      gadget_type: ["", Validators.required],
      gadget_wattage: ["", Validators.required]
    });
  }

  addGadget(name, type, watt, amp, volt) {
    let current = this.current;
    console.log(current);
    let address = current.address;
    console.log(address);
    this.gs.addGadget(name, type, watt, amp, volt, true, address);
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }

  getCurrentAddress() {
    this.authenticationService.dashboard().subscribe(
      data => {
        console.log(data);
        console.log(data.user.address);
        this.current = data.user;
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit() {
    this.getCurrentAddress();
  }
}
