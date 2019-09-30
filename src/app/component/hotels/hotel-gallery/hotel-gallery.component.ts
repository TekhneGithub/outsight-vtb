import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-hotel-gallery',
  templateUrl: './hotel-gallery.component.html',
  styleUrls: ['./hotel-gallery.component.css']
})
export class HotelGalleryComponent implements OnInit {
  @Input() itinerary;
  constructor() { }
  hotels : any[];
  ngOnInit() {
    this.hotels = [];
    for(const seg of this.itinerary.segments) {
      for(const el of seg.elements){
        console.log("unitid " +  el.unitId);
          if(  el.unitId == 5 && el.unitId == 2) {
              
          }
          
        }
       
    }


  }

}
