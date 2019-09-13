import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() itinerary: any;
  markers: any[];

  constructor() { }

  ngOnInit() {
    this.markers = [];
    for (const seg of this.itinerary.data.segments) {
        for (const element of seg.elements) {
            if(element.maps) {
              if(element.maps.latitude){
                this.markers.push(element.maps)
              }
            }
        }
    }
  }

}
