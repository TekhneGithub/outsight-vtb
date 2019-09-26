import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  itinerary: any;
  constructor(private _activatedRoute: ActivatedRoute) {
    const data = this._activatedRoute.snapshot.data;
    this.itinerary = data.itinerary.data;
  }

  ngOnInit() {
    
  }

}
