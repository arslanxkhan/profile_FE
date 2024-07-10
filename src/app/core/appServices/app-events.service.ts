import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppEventsService {
  constructor() {}

  getAllProfiles: EventEmitter<any> = new EventEmitter<any>();
}
