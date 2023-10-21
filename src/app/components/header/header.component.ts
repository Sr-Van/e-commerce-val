import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';

const menuBtn = document.querySelector('.fa-bars')
const menuList = document.querySelector('.navbar-nav')

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @ViewChild('menuList') private myMenu: any;

  isMenuOpen: boolean = false



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

}
