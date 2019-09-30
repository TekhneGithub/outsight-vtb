import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inclusive',
  templateUrl: './inclusive.component.html',
  styleUrls: ['./inclusive.component.css']
})
export class InclusiveComponent implements OnInit {
  @Input() itinerary: any;
  consultData: any;
  consultants:any[];
  finalConsultants:string[] = new Array();
  includedStrings:any[] = new Array();

  constructor() { }

  ngOnInit() {

    this.consultants = [
      {
        name : 'Kim Marokko',
        email: '',
        phone: '',
        title: 'Ik ben afgestudeerd aan de Hogeschool IN-Holland en heb zowel mijn stage als mijn afstudeerproject bij OutSight voltooid. Na mijn afstuderen heb ik voor OutSight de bestemmingen Marokko en Turkije opgezet. De afgelopen jaren heb ik gereisd door Marokko, Turkije, Thailand, Laos, Cambodja & Vietnam, Maleisië, Madagaskar, Mexico & Guatemala, Nicaragua, Colombia, Argentinië & Chili en Tanzania. Vorig jaar was ik in Nepal & Maleisië, dit jaar in Indonesië, Ecuador en Zuid-Afrika! De foto is gemaakt op Durban Square in Kathmandu, Nepal',
        picture: 'assets/images/Kim Marokko.JPG',
      },
      {
        name : 'Saskia',
        email: '',
        phone: '',
        title: 'Ik heb mijn toeristische opleiding gevolgd aan de Hogeschool IN Holland, heb mijn stage gedaan bij OutSight en ben nooit meer weggegaan! Ik hou vooral van Azie. Als tijdens mijn studie heb ik een reis naar China gemaakt en de afgelopen jaren bezocht ik Costa Rica, China, Tibet, Suriname, India, Nepal, Jordanië, Marokko, Myanmar, Sri Lanka & de Malediven, Japan en Bali. In 2017 was ik in het zuiden van India en in Zuid-Korea, in 2018 heb ik een reis naar Japan gemaakt en in 2019 naar Taiwan. Deze foto is gemaakt in Tibet op de route tussen Sakya en Rombuk bij een van de vele hooggelegen passen.',
        picture: 'assets/images/Saskia.JPG',
      },
      {
        name : 'Florine',
        email: '',
        phone: '',
        title: 'Ik heb mijn HTRO diploma behaald bij INHolland Diemen, en ben met mijn diploma op zak vijf maanden gaan backpacken door Azië. Tijdens deze reis heb ik zes verschillende landen bezocht: Thailand, Vietnam, Maleisië (Borneo), de Filipijnen, Japan en Myanmar. Ook heb ik reizen gemaakt naar Costa Rica, Indonesië, Mexico, Laos & Cambodja en de westkust van Amerika. Vorig jaar was ik in Sri Lanka én Brazilië en later dit jaar ga ik naar Zuid-Afrika! Ik hou vooral van Azie, en dat komt ook door het eten!',
        picture: 'assets/images/Florine Sri Lanka.jpg',
      }
    ];
    
    for( const data of this.itinerary.extraFieldValues ){
      
      if (data.name == 'Included') {
        for(const f of data.fields) {
          this.includedStrings.push({ name:f.name });
        }
      }

      for(const fielddata of data.fields)
        {
          this.consultData = fielddata.value;
          
          if (fielddata.name == 'reisspecialist') {
            for(const j of this.consultants ){
              if (fielddata.value.indexOf(j.name) !== -1) {
                this.finalConsultants.push(j);
                //console.log('Hello World' + j.name + " <=> " + fielddata.value);
              }
          }
      
        }
      }
     
    }
    
  }

}
