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
    //console.log("Hero" + this.itinerary.participants['party 1'][0].name);
   this.itinerary.title = this.itinerary.participants['party 1'][0].name + ' ' + this.itinerary.participants['party 1'][0].surname + ' & ' + this.itinerary.participants['party 1'][1].name + ' ' + this.itinerary.participants['party 1'][1].surname;

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

    // this.itinerary.subTitle = this.mappingService.countryByCode(this.itinerary.extraFieldValues[0].fields[0].selected);


  }
}
