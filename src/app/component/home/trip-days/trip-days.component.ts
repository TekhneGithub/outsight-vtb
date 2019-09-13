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
      //map media to url take first one if applicable fix later
      var mediaURL = '';
      if(segment.media[0] !== undefined) {
        mediaURL = segment.media[0].url;
      } else {
        mediaURL = 'https://via.placeholder.com/300';
      }

      var obj = { startDay: segment.day, endDay: segment.day + segment.nights, title: segment.title + segment.subTitle, content: segment.content, media:mediaURL};
      this.titles.push(obj);

      //this.titles.push({ "date": "" , "title" :"" });
    }
  }

}
