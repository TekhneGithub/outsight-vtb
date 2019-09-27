import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() itinerary;
  tips : any;
  constructor() { }

  ngOnInit() {
    //console.log('tips', this.itinerary);
     for(const segment of this.itinerary.segments) {
         for(const el of segment.elements){
            //console.log("tips" +  el.optional);
            if(el.optional == true){
              // console.log(el.title);
              // console.log(el.media);
              // console.log(el.additionalText);
            }
            
         }
         //this.tips.push(segment);
     }

  }

}
