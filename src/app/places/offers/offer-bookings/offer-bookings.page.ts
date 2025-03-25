import { Place } from './../../place.model';
import { PlacesService } from './../../places.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
  standalone: false,
})
export class OfferBookingsPage implements OnInit {

   place! : Place;

  constructor(
    private route : ActivatedRoute,
    private navCtrl : NavController,
    private placeService : PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const placeId = paramMap.get('placeId') || '';
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack("'/places/tabs/offers'");
        return;
      }
      
      this.place = this.placeService.getPlace(placeId);
    })
  }

}
