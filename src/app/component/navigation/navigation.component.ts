import { Component, OnInit } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(".hamburger").click(function() {
      $(this).toggleClass("is-active");
      if ($(this).hasClass("is-active")) {
        $(".navigation ul").animate({ left: "0" }, 500);
      } else {
        $(".navigation ul").animate({ left: "100%" }, 500);
      }
    });
  }
}
