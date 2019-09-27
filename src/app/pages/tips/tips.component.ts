import { Component, OnInit ,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  itinerary: any;

  constructor(private _activatedRoute: ActivatedRoute) {
    const data = this._activatedRoute.snapshot.data;
    this.itinerary = data.itinerary.data;
  }
  

  ngOnInit() {
  }

}
