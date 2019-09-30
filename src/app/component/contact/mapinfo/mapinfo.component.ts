import { Component, OnInit, Input } from '@angular/core';

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
    for(const segment of this.itinerary.data.segments) {
      
      var obj = { day: segment.day, title: segment.title};
      this.titles.push(obj);
  
    }
  }

}
