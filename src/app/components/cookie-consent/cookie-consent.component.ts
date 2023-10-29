import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SendMessageService } from 'src/app/services/send-message.service';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css']
})
export class CookieConsentComponent {
  userConsented: boolean = this.cookieService.get('userConsented') === 'true';
  showCookieConsent: boolean = true;

  constructor(private cookieService: CookieService,
              private send: SendMessageService) {}

  ngOnInit() {
    if(this.userConsented) {
      this.showCookieConsent = false;
      this.send.sendVistCookie()
    }
  }

  acceptCookies() {
    this.userConsented = true;
    this.cookieService.set('userConsented', 'true', 365);
    this.showCookieConsent = false;
    this.cookieService.set('visited', 'true');
    this.send.sendVistCookie()
  }

  rejectCookies() {
    this.userConsented = false;
    this.cookieService.set('userConsented', 'false', 7);
    this.showCookieConsent = false;
  }

}
