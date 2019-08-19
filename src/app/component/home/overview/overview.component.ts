import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() itinerary: any;
  titles:any[] = new Array();

  constructor() { }

  ngOnInit() {

    console.log('this.itinerary.startDate', this.itinerary.startDate);

    var startDate = new Date(this.itinerary.startDate);
    for(const segment of this.itinerary.segments) {
      
      
      var myNewDate = new Date(startDate);
      myNewDate.setDate(myNewDate.getDate() + segment.day);
      
      var obj = { date: myNewDate, title: segment.title };
      this.titles.push(obj);

      for(const element of segment.elements) {
        var obj = { date: myNewDate, title: element.title };
        this.titles.push(obj);
      }
      

      //this.titles.push({ "date": "" , "title" :"" });
    }
    //console.log('titles', this.titles);

  }

}
