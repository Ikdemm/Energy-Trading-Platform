import { Component, OnInit } from "@angular/core";
import {AuthenticationService, UserDetails} from "../../services/authentication.service";
import { User } from "../../models/user.modal";
import { Offer } from '../../models/offer.model';
import { OfferService } from '../../services/offers.service';
import { LinkComponent } from '../marketplace/link/link.component';
import { MarketplaceComponent } from '../marketplace/marketplace.component';

@Component({
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthenticationService) {}

  historyOffers: Offer[];
  user: User;
  details: UserDetails;

  ngOnInit(): void {

  this.getHistory();
  this.auth.dashboard().subscribe(
      data => {
        this.user = data;
      },
      err => {
        console.error(err);
      }
    );
  }

  getHistory() {
    
  }
}
