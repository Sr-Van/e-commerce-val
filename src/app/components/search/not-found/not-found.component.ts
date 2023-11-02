import { Component } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  isLoad: boolean = false

  constructor(private titleService: Title) {}


  ngOnInit() {

    this.titleService.setTitle('Nada encontrando - Val Magazine')
    setTimeout(() => {
      this.isLoad = true
    }, 2000);
  }
}
