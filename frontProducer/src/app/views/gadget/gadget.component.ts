import { Component, OnInit } from "@angular/core";
import { AddGadgetComponent } from "./add-gadget/add-gadget.component";
import { EditGadgetComponent } from "./edit-gadget/edit-gadget.component";
import { MatDialog } from "@angular/material";
import { Gadget } from "../../models/gadget.modal";
import { GadgetsService } from "../../services/gadgets.service";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../../models/user.modal";

@Component({
  selector: "app-gadget",
  templateUrl: "./gadget.component.html",
  styleUrls: ["./gadget.component.scss"]
})
export class GadgetComponent implements OnInit {
  gadgets: Gadget[] = [];
  currentGadgets: Gadget[];
  current: User = new User();
  total = 0;

  constructor(
    public dialog: MatDialog,
    private gs: GadgetsService,
    private authenticationService: AuthenticationService
  ) {}
  ngOnInit() {
    this.getCurrent();
  }
  openAddGadget(): void {
    const dialogRef = this.dialog.open(AddGadgetComponent, {
      width: "250px",
      data: {}
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getlistGadgets();
    });
  }

  openEditGadget(gadget: Gadget): void {
    const dialogRef = this.dialog.open(EditGadgetComponent, { width: "250px" });
    dialogRef.componentInstance.gadget = gadget;
    dialogRef.afterClosed().subscribe(res => {
      this.getlistGadgets();
    });
  }

  deleteGadget(id) {
    this.gs.deleteGadget(id).subscribe(res => {
      console.log("Deleted");
    });
    this.getlistGadgets();
  }

  getCurrent() {
    this.authenticationService.dashboard().subscribe(
      data => {
        console.log(data);
        this.current = data.user;
        console.log(this.current);
        this.getlistGadgets();
      },
      err => {
        console.error(err);
      }
    );
  }

  getlistGadgets() {
    this.gs.getGadgets().subscribe((data: Gadget[]) => {
      console.log(data);
      this.gadgets = data;
      let current = this.current;
      let gadgets = [];
      data.forEach(function(gadget) {
        console.log(gadget);
        if (gadget.owner === current.address) {
          gadgets.push(gadget);
        }
      });
      this.gadgets = gadgets;
      this.getTotal();
    });
  }
  /*
  getCurrentGadgets(current, gadgets) {
    gadgets.forEach(function(gadget) {
      console.log(gadget);
      if (gadget.owner === current.address) {
        console.log(gadget);
        this.currentGadgets.push(gadget);
      }
    });
  }*/

  getTotal() {
    this.total = 0;
    this.gadgets.forEach(element => {
      if (element.state) {
        this.total += element.watt;
      }
    });
    console.log(this.total);
    return this.total;
  }

  getImage(gadget: Gadget) {
    return "../../../assets/img/gadgets/" + gadget.type + ".jpg";
  }

  changeState(gadget) {
    gadget.state = !gadget.state;

    let obj = new Gadget();

    obj._id = gadget._id;
    obj.name = gadget.name;
    obj.type = gadget.type;
    obj.watt = gadget.watt;
    obj.amp = gadget.amp;
    obj.volt = gadget.volt;
    obj.state = gadget.state;
    console.log(obj);
    this.gs.updateGadget(obj).subscribe(data => {
      console.log(data);
    });

    this.getTotal();
  }
}
