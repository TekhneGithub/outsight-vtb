import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).on('load', function() {
      //var personheight= $('.tavel-even-heading').height();
       //console.log("person height " + personheight);
       //$('.travel-person-img').css('min-height', personheight+'px');

      //  side bar 
      var personheight= $('.tavel-even-info').outerHeight();
       //console.log("person height " + personheight);
       $('.travel-person-info').css('min-height', personheight+'px');

    });
  }

}
