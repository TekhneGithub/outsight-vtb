import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mapinfo',
  templateUrl: './mapinfo.component.html',
  styleUrls: ['./mapinfo.component.css']
})
export class MapinfoComponent implements OnInit {

  @Input() itinerary: any;
  titles:any[] = new Array();

  constructor() {
    
  }

  ngOnInit() {
    for(const segment of this.itinerary.segments) {
      
      var obj = { day: segment.day, title: segment.title};
      this.titles.push(obj);
      console.log('title of ', this.titles);
    }
  }

}
