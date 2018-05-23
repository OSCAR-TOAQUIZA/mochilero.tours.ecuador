import { Component, OnInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.js';
@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {
  public wow;
  constructor() {
    this.wow = new WOW({animateClass: 'animated', offset: 100});
  }

  ngOnInit() {
    this.wow.init();
  }

}
