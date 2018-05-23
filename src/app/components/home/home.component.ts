import { Component, OnInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public wow;
  constructor() {
    this.wow = new WOW({animateClass: 'animated', offset: 100});
   }

  ngOnInit() {
  this.wow.init();
  $('.carousel').carousel({
    interval: 2000
  });
  }

}
