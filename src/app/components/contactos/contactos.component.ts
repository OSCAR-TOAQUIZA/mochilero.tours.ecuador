import { Component, OnInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.js';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  public wow;
  constructor() {
    this.wow = new WOW({animateClass: 'animated', offset: 100});
  }

  ngOnInit() {
    this.wow.init();
  }

}
