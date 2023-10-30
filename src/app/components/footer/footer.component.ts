import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getItemsService } from 'src/app/services/get-items.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  isLoad: boolean = false


  constructor(private service: getItemsService,
              private router: Router) {
                this.router.events.subscribe(() => {
                  setTimeout(() => {
                    this.isLoad = true
                  }, 2000);
                  this.isLoad = false
                })
              }

  ngOnInit() {

  }


}
