import { Component, OnInit, Input } from "@angular/core";
import { MappingService } from 'src/app/services/mapping.service';

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {
  @Input() itinerary: any;
  heroTitle = '';

  constructor(private mappingService: MappingService) {
  }
  ngOnInit() {
    for(const extraFieldValue of this.itinerary.extraFieldValues) {
      for (const field of extraFieldValue.fields) {
        if (field.name == 'bestemming1' || field.name == 'bestemming2') {
          if(field.value) {
            this.heroTitle += ' ' + field.value;
            this.heroTitle = this.heroTitle.trim();
          }
        }
      }
    }
  }
}
