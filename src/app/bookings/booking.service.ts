import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Manhattan Mansion',
      userId: 'abc',
      guestNumber: 2
    }
  ];

  get bookings(){
    return [...this._bookings];
  }

}
