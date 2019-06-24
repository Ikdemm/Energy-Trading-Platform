import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { OfferService } from "../../../services/offers.service";
import { User } from "../../../models/user.modal";
import { AuthenticationService } from "../../../services/authentication.service";

@Component({
  selector: "app-add-offer",
  templateUrl: "./add-offer.component.html",
  styleUrls: ["./add-offer.component.scss"]
})
export class AddOfferComponent implements OnInit {
  addOffer: FormGroup;
  user: User;
  public lengthOffers = 0;

  constructor(
    public dialogRef: MatDialogRef<AddOfferComponent>,
    private fb: FormBuilder,
    private offerService: OfferService,
    private auth: AuthenticationService
  ) {
    this.createForm();
  }

  createForm() {
    this.auth.dashboard().subscribe(
      data => {
        this.user = data["user"];
        ////////////////////////////////////
        this.addOffer = this.fb.group({
          addrSeller: ["", Validators.required],
          nameSeller: ["", Validators.required],
          unitPrice: ["", Validators.required],
          tokenNumber: ["", Validators.required],
          debut: ["", Validators.required],
          end: ["", Validators.required]
        });
        ////////////////////////////////////
      },
      err => {
        console.error(err);
      }
    );
  }

  submitOffer(addrSeller, nameSeller, unitPrice, tokenNumber, debut, end) {
    this.offerService.placeOffer(
      addrSeller,
      nameSeller,
      unitPrice,
      tokenNumber,
      debut,
      end
    );
    this.dialogRef.close();
  }

  OffersLength() {
    return this.offerService.getLengthOffers().subscribe(res => {
      this.lengthOffers = Number(res);
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.OffersLength();
  }
}
