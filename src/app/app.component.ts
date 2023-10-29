import { Component } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { SendMessageService } from './services/send-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce';

  userConsented: boolean = this.cookie.get('userConsented') === 'true';

  constructor(private cookie: CookieService,
              private send: SendMessageService) {

    if(this.userConsented) {
      if (!this.cookie.check('visited')) {
        this.cookie.set('visited', 'true');
        this.send.sendVistCookie()
      }
    }
  }

}
