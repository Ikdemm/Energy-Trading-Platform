import { Component, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OfferService } from "../../../services/offers.service";
import { UserService } from "../../../services/users.service";
import { AuthenticationService } from "../../../services/authentication.service";
import { User } from "../../../models/user.modal";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"]
})
export class LinkComponent implements OnInit {
  user: User;
  linkwith: FormGroup;
  total = 0;
  history: Number[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private offerService: OfferService,
    private userService: UserService,
    private auth: AuthenticationService,
    public dialogRef: MatDialogRef<LinkComponent>
  ) {
    this.auth.dashboard().subscribe(
      res => {
        this.user = res["user"];
      },
      err => {
        console.error(err);
      }
    );
  }

  link(id) {
    this.offerService.link({
      idOffer: id,
      Buyer: this.user.address,
      Seller: this.data.offer.addrSeller
    });
    this.history.push(id);
    this.offerService.setHistory(this.history);
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data);
    this.total = this.data.offer.tokenNumber * this.data.offer.unitPrice;
  }
}
