import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { MenuController, SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: false,
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[] = [];
  selectedSegment: string = 'all';
  constructor(private placesService: PlacesService, private menuCtrl : MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  onMenuToggle(){
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);
  }

}
