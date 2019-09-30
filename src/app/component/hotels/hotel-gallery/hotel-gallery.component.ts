import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-hotel-gallery',
  templateUrl: './hotel-gallery.component.html',
  styleUrls: ['./hotel-gallery.component.css']
})
export class HotelGalleryComponent implements OnInit {
  @Input() itinerary;
  constructor() { }
  hotels:any[] = new Array();

  ngOnInit() {
    for(const seg of this.itinerary.segments) {
      for(const el of seg.elements){
        
          if(el.unitId == 5 || el.unitId == 2) {
            console.log(el.media);
            let image = el.media[0] !== undefined ? el.media[0].url : undefined;
            var data = {title: el.title, additionalTaxt: el.additionalText, image: image};
            this.hotels.push(data);
          }
          
        }
       
    }
    console.log('hotels', this.hotels);
  }

}
