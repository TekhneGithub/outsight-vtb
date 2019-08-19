import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-days',
  templateUrl: './trip-days.component.html',
  styleUrls: ['./trip-days.component.css']
})
export class TripDaysComponent implements OnInit {

  @Input() itinerary: any;
  titles:any[] = new Array();

  constructor() { }

  ngOnInit() {
    for(const segment of this.itinerary.segments) {
      
      var obj = { startDay: segment.day, endDay: segment.day + segment.nights, title: segment.title + segment.subTitle, content: segment.content };
      this.titles.push(obj);

      //this.titles.push({ "date": "" , "title" :"" });
    }
  }

}
