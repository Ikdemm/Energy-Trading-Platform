import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { GadgetsService } from "../../../services/gadgets.service";
import { User } from "../../../models/user.modal";
import { AuthenticationService } from "../../../services/authentication.service";
import { Gadget } from "../../../models/gadget.modal";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-gadget",
  templateUrl: "./add-gadget.component.html",
  styleUrls: ["./add-gadget.component.scss"]
})
export class AddGadgetComponent implements OnInit {
  @ViewChild("f") addGadgetForm: NgForm;
  current: User = new User();
  selectedType: any;

  types = [
    "Television",
    "Air Conditioner",
    "Fridge",
    "Bulb",
    "Clothes Iron",
    "Coffee Machine",
    "Dishwasher",
    "Dyer",
    "Fan",
    "Hair Dryer",
    "Hair Iron",
    "Hob",
    "Laptop",
    "Microwave",
    "Oven",
    "Printer",
    "Radio",
    "Sewing Machine",
    "Smoke Detector",
    "Toaster",
    "Vacuum",
    "Washing Machine",
    "Other"
  ];

  constructor(
    private gadgetService: GadgetsService,
    public dialogRef: MatDialogRef<AddGadgetComponent>,
    private authenticationService: AuthenticationService
  ) {}

  addGadget() {
    let current = this.current;
    console.log(current);
    let address = current.address;
    console.log(address);
    this.dialogRef.close();
    let obj = new Gadget();
    obj.manufacturer = this.addGadgetForm.value.manufacturer;
    obj.owner = this.current.address;
    obj.power = this.addGadgetForm.value.power;
    obj.amperage = this.addGadgetForm.value.amperage;
    obj.voltage = this.addGadgetForm.value.voltage;
    obj.type = this.addGadgetForm.value.type;
    obj.state = true;

    console.log(obj);

    this.gadgetService.addGadget(obj);
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
    console.log(this.types);
    this.getCurrentAddress();
  }
}
