import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {
  @Input() itinerary: any;
  
  ngOnInit() {
    ///console.log(this.itinerary);
  //   // this.itinerary.title = this.itinerary.participants['party 1'][0].name + ' ' + this.itinerary.participants['party 1'][0].surname + ' & ' + this.itinerary.participants['party 1'][1].name + ' ' + this.itinerary.participants['party 1'][1].surname;

    
   

    // this.itinerary.subTitle = this.mappingService.countryByCode(this.itinerary.extraFieldValues[0].fields[0].selected);


  }
}
