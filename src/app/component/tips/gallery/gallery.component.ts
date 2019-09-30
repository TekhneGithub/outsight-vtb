import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() itinerary;
  tips : any[];
  constructor() { }

  ngOnInit() {
    //console.log('tips', this.itinerary);
    this.tips = [];
     for(const seg of this.itinerary.segments) {
       //console.log("custom seg" + seg.title);
         for(const el of seg.elements){
            //console.log("el" +  el.optional);
            if(el.optional == true){
                // console.log(el.title);
                //console.log(el.media[0].url);
                console.log(el.additionalText);
                this.tips.push(el);
            }
         }
        
     }
  }

}
