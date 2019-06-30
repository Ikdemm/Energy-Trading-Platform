import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { User } from '../../models/user.modal';
import { OfferService } from '../../services/offers.service';
import { UserService } from '../../services/users.service';
import { MatDialog } from '@angular/material';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { LinkComponent } from './link/link.component';
import {AuthenticationService, UserDetails } from '../../services/authentication.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
  searchText;
  public length = 0;
  Offers: Offer[];
  user: User ;


  constructor(
    private offerService: OfferService,
    private userService: UserService,
    public dialog: MatDialog,
    private auth: AuthenticationService
  ) {
    this.auth.dashboard().subscribe(
      (data) => {
        this.user=  data['user'];
      },
      err => {
        console.error(err);
      }
    );
   }

  openAddOffer(): void {
    const dialogRef = this.dialog.open(AddOfferComponent, {
      width: '250px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getlistOffers();
    });
  }


  openLink(id): void {
    const dialogRef = this.dialog.open(LinkComponent,{
      width: '600px',
      data: {
        idOffer: id,
        offer: this.Offers[id]
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getlistOffers();
    });
  }

  getlistOffers() {
    this.offerService.getListOffers().subscribe(
      res => {
      this.Offers = JSON.parse(res);
      console.log(this.Offers);
      /*this.Offers[0].addrSeller = res['addrSeller'];
      this.Offers[0].nameSeller = res['nameSeller'];
      this.Offers[0].unitPrice = res['unitPrice'];
      this.Offers[0].tokenNumber = res['tokenNumber'];
      this.Offers[0].debut = res['debut'];*/
      },
      error => {
        console.log(error);
      });
  }

  // link(id) {
  //   this.offerService.link({idOffer:id,Buyer:this.user.address,Seller:this.Offers[id].addrSeller});
  // }

  ngOnInit() {
    this.getlistOffers();
   }
}
