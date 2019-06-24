import { Component, OnInit } from "@angular/core";
import { Gadget } from "../../../models/gadget.modal";
import { FormBuilder, FormGroup } from "@angular/forms";
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
  //gottenGadget: any;
  editGadgetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gadgetService: GadgetsService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<EditGadgetComponent>
  ) {
    this.createForm();
  }

  ngOnInit() {
    /*this.route.params.subscribe(params => {
      this.gs.editGadget(params['id']).subscribe(res => {
        this.gottenGadget = res;
      });
    });*/
  }

  createForm() {
    this.editGadgetForm = this.fb.group({});
  }

  updateGadget(name, type, watt, amp, volt, state) {
    let obj = new Gadget();
    obj._id = this.gadget._id;
    obj.name = name;
    obj.type = type;
    obj.watt = watt;
    obj.amp = amp;
    obj.volt = volt;
    obj.state = state;

    this.gadgetService.updateGadget(obj).subscribe(data => {
      console.log(data);
    });

    this.dialogRef.close();
    /*this.route.params.subscribe(params => {
      this.gs.updateGadget(name, type, watt, amp, volt, state, params["id"]);
      this.router.navigate(["gadget"]);
    });*/
  }

  closeModal() {
    this.dialogRef.close();
  }
}
