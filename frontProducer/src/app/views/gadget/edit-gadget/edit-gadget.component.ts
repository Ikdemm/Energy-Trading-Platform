import { Component, OnInit, ViewChild } from "@angular/core";
import { Gadget } from "../../../models/gadget.modal";
import { NgForm } from "@angular/forms";
import { GadgetsService } from "../../../services/gadgets.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-edit-gadget",
  templateUrl: "./edit-gadget.component.html",
  styleUrls: ["./edit-gadget.component.scss"]
})
export class EditGadgetComponent implements OnInit {
  gadget: Gadget;
  @ViewChild("f") editGadgetForm: NgForm;

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
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<EditGadgetComponent>
  ) {}

  ngOnInit() {}

  updateGadget() {
    let obj = new Gadget();
    obj._id = this.gadget._id;
    obj.manufacturer = this.editGadgetForm.value.manufacturer;
    obj.type = this.editGadgetForm.value.type;
    obj.power = this.editGadgetForm.value.power;
    obj.amperage = this.editGadgetForm.value.amperage;
    obj.voltage = this.editGadgetForm.value.voltage;
    obj.state = this.editGadgetForm.value.state;

    this.gadgetService.updateGadget(obj).subscribe(data => {
      console.log(data);
    });

    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
