import { Component, OnInit, Input } from "@angular/core";
import { MappingService } from "src/app/services/mapping.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {
  @Input() itinerary: any;

  constructor(private mappingService: MappingService) {}

  ngOnInit() {
    this.itinerary.title =
      this.itinerary.participants["party 1"][0].name +
      " " +
      this.itinerary.participants["party 1"][0].surname;
    this.itinerary.subTitle = this.mappingService.countryByCode(
      this.itinerary.extraFieldValues[0].fields[0].selected
    );
  }
}
