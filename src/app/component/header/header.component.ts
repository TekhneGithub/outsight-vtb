import { Component, OnInit } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      //>=, not <=
      if (scroll >= 10) {
        $("header").addClass("small-header", 500);
      } else {
        $("header").removeClass("small-header", 500);
      }
    });
  }
}
