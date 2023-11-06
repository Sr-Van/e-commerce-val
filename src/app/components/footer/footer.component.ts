import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { getItemsService } from 'src/app/services/get-items.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  isLoad: boolean = false


  constructor(private Event: EventsService,
              private router: Router) {
                this.Event.routerEvent.subscribe(value => {
                  this.isLoad = value
                  setTimeout(() => {
                    this.isLoad = this.isLoad = true
                  }, 2000);
                })

                this.router.events.subscribe(() => {

                  setTimeout(() => {
                    this.isLoad = true
                  }, 3000);
                  this.isLoad = false
                })
              }

  ngOnInit() {

  }


}
