import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).on('load', function() {
      var personheight= $('.travel-person-img').height();
       //console.log("person height " + personheight);
       $('.tavel-even-heading').css('min-height', personheight+'px');

    });
  }

}
