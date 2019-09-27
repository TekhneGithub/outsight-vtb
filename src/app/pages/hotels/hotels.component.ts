import { Component, OnInit } from '@angular/core';
//import { GalleryinfoComponent } from '../component/tips/galleryinfo/galleryinfo.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  itinerary: any;

  constructor(private _activatedRoute: ActivatedRoute) {
    const data = this._activatedRoute.snapshot.data;
    this.itinerary = data.itinerary.data;
  }

  ngOnInit() {
  }

}
