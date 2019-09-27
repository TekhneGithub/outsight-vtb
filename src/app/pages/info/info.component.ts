import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  itinerary: any;

  constructor(private _activatedRoute: ActivatedRoute) {
    const data = this._activatedRoute.snapshot.data;
    this.itinerary = data.itinerary.data;
  }

  ngOnInit() {
    
  }

}
