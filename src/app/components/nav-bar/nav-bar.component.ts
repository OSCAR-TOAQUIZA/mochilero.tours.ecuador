import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#test').scrollToFixed();
    $('.res-nav_click').click(function() {
      $('.main-nav').slideToggle();
      return false;
    });
  }

}
