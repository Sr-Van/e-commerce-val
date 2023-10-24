import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  isLoad: boolean = false


  ngOnInit() {
    setTimeout(() => {
      this.isLoad = true
    }, 2000);
  }
}
