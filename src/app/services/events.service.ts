import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  routerEvent = new EventEmitter<boolean>()

  constructor() { }
}
