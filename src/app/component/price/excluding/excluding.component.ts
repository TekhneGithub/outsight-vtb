import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-excluding',
  templateUrl: './excluding.component.html',
  styleUrls: ['./excluding.component.css']
})
export class ExcludingComponent implements OnInit {
  @Input() itinerary: any;
  excludedStrings:any[] = new Array();

  constructor() { }

  ngOnInit() {

    for( const data of this.itinerary.extraFieldValues ){
      
      if (data.name == 'Not included') {
        for(const f of data.fields) {
          if(f.value !== undefined) {
            if(f.value != true && f.value != '') {
              this.excludedStrings.push({ name:f.value });
            } else {
              this.excludedStrings.push({ name:f.name });
            }

          } else {
            this.excludedStrings.push({ name:f.name });
          }
        }
      }

    }

  }

}
