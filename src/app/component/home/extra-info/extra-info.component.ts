import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css']
})
export class ExtraInfoComponent implements OnInit {

  @Input() itinerary: any;
  general: string = '';

  constructor() { }

  ngOnInit() {

    this.general = this.itinerary.TSOrder.texts.general;
    //console.log('general', this.itinerary);

  }

}
