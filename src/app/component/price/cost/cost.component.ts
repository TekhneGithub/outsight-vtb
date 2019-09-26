import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent implements OnInit {
  @Input() itinerary: any;
  flightPrice: number = 0;
  otherCost: number = 0;
  totalCost: number = 0;

  constructor() { }

  ngOnInit() {

    for(const segment of this.itinerary.segments) {

      for(const element of segment.elements) {

        if(element.unitId == 9 || element.unitId == 10) {
          this.flightPrice += Math.round(element.olPrices.salesTotal);
        } else {
          this.otherCost += Math.round(element.olPrices.salesTotal);
        }

      }

    }
    this.totalCost = this.flightPrice + this.otherCost;
  
  }

}
