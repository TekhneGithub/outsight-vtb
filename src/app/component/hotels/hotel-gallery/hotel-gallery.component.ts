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

    for(const seg of this.itinerary.segments) {
      console.log("custom seg" + seg.title);
        for(const el of seg.elements){
          //console.log("unitid " +  el.unitId);
           
        }
       
    }


  }

}
