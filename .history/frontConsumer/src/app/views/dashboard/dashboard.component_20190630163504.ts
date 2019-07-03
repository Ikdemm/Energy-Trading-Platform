import { Component, OnInit } from "@angular/core";
import {AuthenticationService, UserDetails} from "../../services/authentication.service";
import { User } from "../../models/user.modal";
import { Offer } from '../../models/offer.model';
import { OfferService } from '../../services/offers.service';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthenticationService, private offerService: OfferService) {
    
    this.offerService.getListOffers().subscribe(
      res => {
      this.offers = JSON.parse(res);
    },
    error => {
      console.log(error);
    });

    this.history = this.offerService.getHistory();
  }

  offers: Offer[];
  history: Number[]
  historyOffers: Offer[];
  user: User;
  details: UserDetails;

  ngOnInit(): void {
  
  this.getHistory();
  console.log(this.history);
  
  // this.auth.dashboard().subscribe(
  //     data => {
  //       this.user = data;
  //     },
  //     err => {
  //       console.error(err);
  //     }
  //   );
  }

  getHistory() {
    for(let Number in this.history){
      this.historyOffers[Number] = this.offers[Number];
    }
  }
}
