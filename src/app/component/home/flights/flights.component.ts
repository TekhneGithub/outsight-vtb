import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  @Input() itinerary: any;
  airports: any[];
  airportDescriptions: any[];
  flights:any[] = new Array();
  months: any[];
  departureFlight: any;
  arrivalFlight: any;

  constructor() { }

  ngOnInit() {

    this.airportDescriptions = [
      {
        "airport_id": 1,
        "language_id": 1,
        "description": "Amsterdam Schiphol"
      },
      {
        "airport_id": 1,
        "language_id": 2,
        "description": "Amsterdam Schiphol"
      },
      {
        "airport_id": 2,
        "language_id": 1,
        "description": "Cape Town"
      },
      {
        "airport_id": 2,
        "language_id": 2,
        "description": "Kaapstad"
      },
      {
        "airport_id": 3,
        "language_id": 1,
        "description": "Brussels"
      },
      {
        "airport_id": 3,
        "language_id": 2,
        "description": "Brussel"
      },
      {
        "airport_id": 4,
        "language_id": 1,
        "description": "Buenos Aires Ezeiza Airport"
      },
      {
        "airport_id": 4,
        "language_id": 2,
        "description": "Buenos Aires Ezeiza Airport"
      },
      {
        "airport_id": 5,
        "language_id": 1,
        "description": "Abu Dhabi"
      },
      {
        "airport_id": 5,
        "language_id": 2,
        "description": "Abu Dhabi"
      },
      {
        "airport_id": 6,
        "language_id": 1,
        "description": "Antigua International Airport"
      },
      {
        "airport_id": 6,
        "language_id": 2,
        "description": "Vliegveld Antigua Internationaal"
      },
      {
        "airport_id": 7,
        "language_id": 1,
        "description": "Barbuda Codrington Airport"
      },
      {
        "airport_id": 7,
        "language_id": 2,
        "description": "Vliegveld Barbuda Codrington"
      },
      {
        "airport_id": 8,
        "language_id": 1,
        "description": "Bariloche"
      },
      {
        "airport_id": 8,
        "language_id": 2,
        "description": "Bariloche"
      },
      {
        "airport_id": 9,
        "language_id": 1,
        "description": "Buenos Aires Aeroparque Jorge Newbery Airport"
      },
      {
        "airport_id": 9,
        "language_id": 2,
        "description": "Buenos Aires Aeroparque Jorge Newbery Airport"
      },
      {
        "airport_id": 10,
        "language_id": 1,
        "description": "Calafate"
      },
      {
        "airport_id": 10,
        "language_id": 2,
        "description": "Calafate"
      },
      {
        "airport_id": 11,
        "language_id": 1,
        "description": "Cordoba"
      },
      {
        "airport_id": 11,
        "language_id": 2,
        "description": "Cordoba"
      },
      {
        "airport_id": 12,
        "language_id": 1,
        "description": "Corrientes"
      },
      {
        "airport_id": 12,
        "language_id": 2,
        "description": "Corrientes"
      },
      {
        "airport_id": 13,
        "language_id": 1,
        "description": "Formosa"
      },
      {
        "airport_id": 13,
        "language_id": 2,
        "description": "Formosa"
      },
      {
        "airport_id": 14,
        "language_id": 1,
        "description": "La Rioja"
      },
      {
        "airport_id": 14,
        "language_id": 2,
        "description": "La Rioja"
      },
      {
        "airport_id": 15,
        "language_id": 1,
        "description": "Mar del Plata"
      },
      {
        "airport_id": 15,
        "language_id": 2,
        "description": "Mar del Plata"
      },
      {
        "airport_id": 16,
        "language_id": 1,
        "description": "Mendoza"
      },
      {
        "airport_id": 16,
        "language_id": 2,
        "description": "Mendoza"
      },
      {
        "airport_id": 17,
        "language_id": 1,
        "description": "Posadas"
      },
      {
        "airport_id": 17,
        "language_id": 2,
        "description": "Posadas"
      },
      {
        "airport_id": 18,
        "language_id": 1,
        "description": "Puerto Iguazú"
      },
      {
        "airport_id": 18,
        "language_id": 2,
        "description": "Puerto Iguazú"
      },
      {
        "airport_id": 19,
        "language_id": 1,
        "description": "Rio Gallegos"
      },
      {
        "airport_id": 19,
        "language_id": 2,
        "description": "Rio Gallegos"
      },
      {
        "airport_id": 20,
        "language_id": 1,
        "description": "Salta"
      },
      {
        "airport_id": 20,
        "language_id": 2,
        "description": "Salta"
      },
      {
        "airport_id": 21,
        "language_id": 1,
        "description": "San Juan"
      },
      {
        "airport_id": 21,
        "language_id": 2,
        "description": "San Juan"
      },
      {
        "airport_id": 22,
        "language_id": 1,
        "description": "Trelew"
      },
      {
        "airport_id": 22,
        "language_id": 2,
        "description": "Trelew"
      },
      {
        "airport_id": 23,
        "language_id": 1,
        "description": "Tucuman"
      },
      {
        "airport_id": 23,
        "language_id": 2,
        "description": "Tucuman"
      },
      {
        "airport_id": 24,
        "language_id": 1,
        "description": "Ushuaia"
      },
      {
        "airport_id": 24,
        "language_id": 2,
        "description": "Ushuaia"
      },
      {
        "airport_id": 25,
        "language_id": 1,
        "description": "Adelaide Airport"
      },
      {
        "airport_id": 25,
        "language_id": 2,
        "description": "Adelaide Airport"
      },
      {
        "airport_id": 26,
        "language_id": 1,
        "description": "Alice Springs Airport"
      },
      {
        "airport_id": 26,
        "language_id": 2,
        "description": "Alice Springs Airport"
      },
      {
        "airport_id": 27,
        "language_id": 1,
        "description": "Ayers Rock Airport"
      },
      {
        "airport_id": 27,
        "language_id": 2,
        "description": "Ayers Rock Airport"
      },
      {
        "airport_id": 28,
        "language_id": 1,
        "description": "Cairns Airport"
      },
      {
        "airport_id": 28,
        "language_id": 2,
        "description": "Cairns Airport"
      },
      {
        "airport_id": 29,
        "language_id": 1,
        "description": "Darwin Airport"
      },
      {
        "airport_id": 29,
        "language_id": 2,
        "description": "Darwin Airport"
      },
      {
        "airport_id": 30,
        "language_id": 1,
        "description": "Melbourne Airport"
      },
      {
        "airport_id": 30,
        "language_id": 2,
        "description": "Melbourne Airport"
      },
      {
        "airport_id": 31,
        "language_id": 1,
        "description": "Perth Airport"
      },
      {
        "airport_id": 31,
        "language_id": 2,
        "description": "Perth Airport"
      },
      {
        "airport_id": 32,
        "language_id": 1,
        "description": "Sydney Airport"
      },
      {
        "airport_id": 32,
        "language_id": 2,
        "description": "Sydney Airport"
      },
      {
        "airport_id": 33,
        "language_id": 1,
        "description": "Nassau"
      },
      {
        "airport_id": 33,
        "language_id": 2,
        "description": "Nassau"
      },
      {
        "airport_id": 34,
        "language_id": 1,
        "description": "Bahrain"
      },
      {
        "airport_id": 34,
        "language_id": 2,
        "description": "Bahrain"
      },
      {
        "airport_id": 35,
        "language_id": 1,
        "description": "Bridgetown"
      },
      {
        "airport_id": 35,
        "language_id": 2,
        "description": "Bridgetown"
      },
      {
        "airport_id": 36,
        "language_id": 1,
        "description": "Brussels Midi"
      },
      {
        "airport_id": 36,
        "language_id": 2,
        "description": "Brussel Midi"
      },
      {
        "airport_id": 37,
        "language_id": 1,
        "description": "Antwerpen Central"
      },
      {
        "airport_id": 37,
        "language_id": 2,
        "description": "Antwerpen Centraal"
      },
      {
        "airport_id": 38,
        "language_id": 1,
        "description": "Belize-City"
      },
      {
        "airport_id": 38,
        "language_id": 2,
        "description": "Belize-Stad"
      },
      {
        "airport_id": 39,
        "language_id": 1,
        "description": "San Pedro Ambergris"
      },
      {
        "airport_id": 39,
        "language_id": 2,
        "description": "San Pedro Ambergris"
      },
      {
        "airport_id": 40,
        "language_id": 1,
        "description": "Paro Airport"
      },
      {
        "airport_id": 40,
        "language_id": 2,
        "description": "Vliegveld Paro"
      },
      {
        "airport_id": 41,
        "language_id": 1,
        "description": "La Paz"
      },
      {
        "airport_id": 41,
        "language_id": 2,
        "description": "La Paz"
      },
      {
        "airport_id": 42,
        "language_id": 1,
        "description": "Gaberone Airport"
      },
      {
        "airport_id": 42,
        "language_id": 2,
        "description": "Vliegveld Gaberone"
      },
      {
        "airport_id": 43,
        "language_id": 1,
        "description": "Kasane Airport"
      },
      {
        "airport_id": 43,
        "language_id": 2,
        "description": "Kasane Airport"
      },
      {
        "airport_id": 44,
        "language_id": 1,
        "description": "Maun Airport"
      },
      {
        "airport_id": 44,
        "language_id": 2,
        "description": "Maun Airport"
      },
      {
        "airport_id": 45,
        "language_id": 1,
        "description": "Airpass"
      },
      {
        "airport_id": 45,
        "language_id": 2,
        "description": "Airpass"
      },
      {
        "airport_id": 46,
        "language_id": 1,
        "description": "Alta Floresta"
      },
      {
        "airport_id": 46,
        "language_id": 2,
        "description": "Alta Floresta"
      },
      {
        "airport_id": 47,
        "language_id": 1,
        "description": "Belo Horizonte"
      },
      {
        "airport_id": 47,
        "language_id": 2,
        "description": "Belo Horizonte"
      },
      {
        "airport_id": 48,
        "language_id": 1,
        "description": "Brasilia"
      },
      {
        "airport_id": 48,
        "language_id": 2,
        "description": "Brasilia"
      },
      {
        "airport_id": 49,
        "language_id": 1,
        "description": "Campo Grande"
      },
      {
        "airport_id": 49,
        "language_id": 2,
        "description": "Campo Grande"
      },
      {
        "airport_id": 50,
        "language_id": 1,
        "description": "Cuiabá"
      },
      {
        "airport_id": 50,
        "language_id": 2,
        "description": "Cuiabá"
      },
      {
        "airport_id": 51,
        "language_id": 1,
        "description": "Fernando de Noronha"
      },
      {
        "airport_id": 51,
        "language_id": 2,
        "description": "Fernando de Noronha"
      },
      {
        "airport_id": 52,
        "language_id": 1,
        "description": "Florianopolis"
      },
      {
        "airport_id": 52,
        "language_id": 2,
        "description": "Florianopolis"
      },
      {
        "airport_id": 53,
        "language_id": 1,
        "description": "Foz do Iguazú"
      },
      {
        "airport_id": 53,
        "language_id": 2,
        "description": "Foz do Iguazú"
      },
      {
        "airport_id": 54,
        "language_id": 1,
        "description": "Illheus"
      },
      {
        "airport_id": 54,
        "language_id": 2,
        "description": "Illheus"
      },
      {
        "airport_id": 55,
        "language_id": 1,
        "description": "Manaus"
      },
      {
        "airport_id": 55,
        "language_id": 2,
        "description": "Manaus"
      },
      {
        "airport_id": 56,
        "language_id": 1,
        "description": "Natal"
      },
      {
        "airport_id": 56,
        "language_id": 2,
        "description": "Natal"
      },
      {
        "airport_id": 57,
        "language_id": 1,
        "description": "Porto Seguro"
      },
      {
        "airport_id": 57,
        "language_id": 2,
        "description": "Porto Seguro"
      },
      {
        "airport_id": 58,
        "language_id": 1,
        "description": "Recife"
      },
      {
        "airport_id": 58,
        "language_id": 2,
        "description": "Recife"
      },
      {
        "airport_id": 59,
        "language_id": 1,
        "description": "Rio de Janeiro"
      },
      {
        "airport_id": 59,
        "language_id": 2,
        "description": "Rio de Janeiro"
      },
      {
        "airport_id": 60,
        "language_id": 1,
        "description": "Salvador"
      },
      {
        "airport_id": 60,
        "language_id": 2,
        "description": "Salvador"
      },
      {
        "airport_id": 61,
        "language_id": 1,
        "description": "Sao Luiz"
      },
      {
        "airport_id": 61,
        "language_id": 2,
        "description": "Sao Luiz"
      },
      {
        "airport_id": 62,
        "language_id": 1,
        "description": "Sao Paulo International Airport"
      },
      {
        "airport_id": 62,
        "language_id": 2,
        "description": "Sao Paulo International Airport"
      },
      {
        "airport_id": 63,
        "language_id": 1,
        "description": "Sao Paolo National"
      },
      {
        "airport_id": 63,
        "language_id": 2,
        "description": "Sao Paolo Nationaal"
      },
      {
        "airport_id": 64,
        "language_id": 1,
        "description": "Tefe"
      },
      {
        "airport_id": 64,
        "language_id": 2,
        "description": "Tefe"
      },
      {
        "airport_id": 65,
        "language_id": 1,
        "description": "Phnom Penh"
      },
      {
        "airport_id": 65,
        "language_id": 2,
        "description": "Phnom Penh"
      },
      {
        "airport_id": 66,
        "language_id": 1,
        "description": "Siem Reap Airport"
      },
      {
        "airport_id": 66,
        "language_id": 2,
        "description": "Vliegveld Siem Reap"
      },
      {
        "airport_id": 67,
        "language_id": 1,
        "description": "St. Johns"
      },
      {
        "airport_id": 67,
        "language_id": 2,
        "description": "St. Johns"
      },
      {
        "airport_id": 68,
        "language_id": 1,
        "description": "Toronto"
      },
      {
        "airport_id": 68,
        "language_id": 2,
        "description": "Toronto"
      },
      {
        "airport_id": 69,
        "language_id": 1,
        "description": "Winnipeg"
      },
      {
        "airport_id": 69,
        "language_id": 2,
        "description": "Winnipeg"
      },
      {
        "airport_id": 70,
        "language_id": 1,
        "description": "Canouan"
      },
      {
        "airport_id": 70,
        "language_id": 2,
        "description": "Canouan"
      },
      {
        "airport_id": 71,
        "language_id": 1,
        "description": "Bangui"
      },
      {
        "airport_id": 71,
        "language_id": 2,
        "description": "Bangui"
      },
      {
        "airport_id": 72,
        "language_id": 1,
        "description": "Antofagasta"
      },
      {
        "airport_id": 72,
        "language_id": 2,
        "description": "Antofagasta"
      },
      {
        "airport_id": 73,
        "language_id": 1,
        "description": "Arica"
      },
      {
        "airport_id": 73,
        "language_id": 2,
        "description": "Arica"
      },
      {
        "airport_id": 74,
        "language_id": 1,
        "description": "Balmaceda"
      },
      {
        "airport_id": 74,
        "language_id": 2,
        "description": "Balmaceda"
      },
      {
        "airport_id": 75,
        "language_id": 1,
        "description": "Calama"
      },
      {
        "airport_id": 75,
        "language_id": 2,
        "description": "Calama"
      },
      {
        "airport_id": 76,
        "language_id": 1,
        "description": "Easter Island"
      },
      {
        "airport_id": 76,
        "language_id": 2,
        "description": "Paaseiland"
      },
      {
        "airport_id": 77,
        "language_id": 1,
        "description": "Iquique"
      },
      {
        "airport_id": 77,
        "language_id": 2,
        "description": "Iquique"
      },
      {
        "airport_id": 78,
        "language_id": 1,
        "description": "La Serena"
      },
      {
        "airport_id": 78,
        "language_id": 2,
        "description": "La Serena"
      },
      {
        "airport_id": 79,
        "language_id": 1,
        "description": "Puerto Montt"
      },
      {
        "airport_id": 79,
        "language_id": 2,
        "description": "Puerto Montt"
      },
      {
        "airport_id": 80,
        "language_id": 1,
        "description": "Punta Arenas"
      },
      {
        "airport_id": 80,
        "language_id": 2,
        "description": "Punta Arenas"
      },
      {
        "airport_id": 81,
        "language_id": 1,
        "description": "Santiago de Chile"
      },
      {
        "airport_id": 81,
        "language_id": 2,
        "description": "Santiago de Chile"
      },
      {
        "airport_id": 82,
        "language_id": 1,
        "description": "Temuco"
      },
      {
        "airport_id": 82,
        "language_id": 2,
        "description": "Temuco"
      },
      {
        "airport_id": 83,
        "language_id": 1,
        "description": "Beijing"
      },
      {
        "airport_id": 83,
        "language_id": 2,
        "description": "Beijing"
      },
      {
        "airport_id": 84,
        "language_id": 1,
        "description": "Chengdu"
      },
      {
        "airport_id": 84,
        "language_id": 2,
        "description": "Chengdu"
      },
      {
        "airport_id": 85,
        "language_id": 1,
        "description": "Liberia"
      },
      {
        "airport_id": 85,
        "language_id": 2,
        "description": "Liberia"
      },
      {
        "airport_id": 86,
        "language_id": 1,
        "description": "Palmar"
      },
      {
        "airport_id": 86,
        "language_id": 2,
        "description": "Palmar"
      },
      {
        "airport_id": 87,
        "language_id": 1,
        "description": "Quepos"
      },
      {
        "airport_id": 87,
        "language_id": 2,
        "description": "Quepos"
      },
      {
        "airport_id": 88,
        "language_id": 1,
        "description": "San José"
      },
      {
        "airport_id": 88,
        "language_id": 2,
        "description": "San José"
      },
      {
        "airport_id": 89,
        "language_id": 1,
        "description": "Tambor"
      },
      {
        "airport_id": 89,
        "language_id": 2,
        "description": "Tambor"
      },
      {
        "airport_id": 90,
        "language_id": 1,
        "description": "Tortuguero"
      },
      {
        "airport_id": 90,
        "language_id": 2,
        "description": "Tortuguero"
      },
      {
        "airport_id": 91,
        "language_id": 1,
        "description": "Havana"
      },
      {
        "airport_id": 91,
        "language_id": 2,
        "description": "Havana"
      },
      {
        "airport_id": 92,
        "language_id": 1,
        "description": "Varadero"
      },
      {
        "airport_id": 92,
        "language_id": 2,
        "description": "Varadero"
      },
      {
        "airport_id": 93,
        "language_id": 1,
        "description": "Paphos"
      },
      {
        "airport_id": 93,
        "language_id": 2,
        "description": "Paphos"
      },
      {
        "airport_id": 94,
        "language_id": 1,
        "description": "Copenhagen"
      },
      {
        "airport_id": 94,
        "language_id": 2,
        "description": "Kopenhagen"
      },
      {
        "airport_id": 95,
        "language_id": 1,
        "description": "Dubai"
      },
      {
        "airport_id": 95,
        "language_id": 2,
        "description": "Dubai"
      },
      {
        "airport_id": 96,
        "language_id": 1,
        "description": "Dusseldorf"
      },
      {
        "airport_id": 96,
        "language_id": 2,
        "description": "Dusseldorf"
      },
      {
        "airport_id": 97,
        "language_id": 1,
        "description": "Frankfurt"
      },
      {
        "airport_id": 97,
        "language_id": 2,
        "description": "Frankfurt"
      },
      {
        "airport_id": 98,
        "language_id": 1,
        "description": "Hamburg"
      },
      {
        "airport_id": 98,
        "language_id": 2,
        "description": "Hamburg"
      },
      {
        "airport_id": 99,
        "language_id": 1,
        "description": "München"
      },
      {
        "airport_id": 99,
        "language_id": 2,
        "description": "München"
      },
      {
        "airport_id": 100,
        "language_id": 1,
        "description": "Weeze Düsseldorf"
      },
      {
        "airport_id": 100,
        "language_id": 2,
        "description": "Weeze Düsseldorf"
      },
      {
        "airport_id": 101,
        "language_id": 1,
        "description": "Coca"
      },
      {
        "airport_id": 101,
        "language_id": 2,
        "description": "Coca"
      },
      {
        "airport_id": 102,
        "language_id": 1,
        "description": "Cuenca Airport"
      },
      {
        "airport_id": 102,
        "language_id": 2,
        "description": "Vliegveld Cuenca"
      },
      {
        "airport_id": 103,
        "language_id": 1,
        "description": "Guayaquil"
      },
      {
        "airport_id": 103,
        "language_id": 2,
        "description": "Guayaquil"
      },
      {
        "airport_id": 104,
        "language_id": 1,
        "description": "Manta"
      },
      {
        "airport_id": 104,
        "language_id": 2,
        "description": "Manta"
      },
      {
        "airport_id": 105,
        "language_id": 1,
        "description": "Quito"
      },
      {
        "airport_id": 105,
        "language_id": 2,
        "description": "Quito"
      },
      {
        "airport_id": 106,
        "language_id": 1,
        "description": "Caïro"
      },
      {
        "airport_id": 106,
        "language_id": 2,
        "description": "Caïro"
      },
      {
        "airport_id": 107,
        "language_id": 1,
        "description": "Hurghada"
      },
      {
        "airport_id": 107,
        "language_id": 2,
        "description": "Hurghada"
      },
      {
        "airport_id": 108,
        "language_id": 1,
        "description": "Luxor"
      },
      {
        "airport_id": 108,
        "language_id": 2,
        "description": "Luxor"
      },
      {
        "airport_id": 109,
        "language_id": 1,
        "description": "Addis Ababa"
      },
      {
        "airport_id": 109,
        "language_id": 2,
        "description": "Addis Ababa"
      },
      {
        "airport_id": 110,
        "language_id": 1,
        "description": "Mount Pleasant"
      },
      {
        "airport_id": 110,
        "language_id": 2,
        "description": "Mount Pleasant"
      },
      {
        "airport_id": 111,
        "language_id": 1,
        "description": "Port Stanley"
      },
      {
        "airport_id": 111,
        "language_id": 2,
        "description": "Port Stanley"
      },
      {
        "airport_id": 112,
        "language_id": 1,
        "description": "Manila"
      },
      {
        "airport_id": 112,
        "language_id": 2,
        "description": "Manila"
      },
      {
        "airport_id": 113,
        "language_id": 1,
        "description": "Helsinki"
      },
      {
        "airport_id": 113,
        "language_id": 2,
        "description": "Helsinki"
      },
      {
        "airport_id": 114,
        "language_id": 1,
        "description": "Kajaani"
      },
      {
        "airport_id": 114,
        "language_id": 2,
        "description": "Kajaani"
      },
      {
        "airport_id": 115,
        "language_id": 1,
        "description": "Oulu"
      },
      {
        "airport_id": 115,
        "language_id": 2,
        "description": "Oulu"
      },
      {
        "airport_id": 116,
        "language_id": 1,
        "description": "Nice"
      },
      {
        "airport_id": 116,
        "language_id": 2,
        "description": "Nice"
      },
      {
        "airport_id": 117,
        "language_id": 1,
        "description": "Paris Charles de Gaulle"
      },
      {
        "airport_id": 117,
        "language_id": 2,
        "description": "Parijs Charles de Gaulle"
      },
      {
        "airport_id": 118,
        "language_id": 1,
        "description": "Paris Orly"
      },
      {
        "airport_id": 118,
        "language_id": 2,
        "description": "Parijs Orly"
      },
      {
        "airport_id": 119,
        "language_id": 1,
        "description": "Galápagos"
      },
      {
        "airport_id": 119,
        "language_id": 2,
        "description": "Galápagos"
      },
      {
        "airport_id": 120,
        "language_id": 1,
        "description": "San Cristóbal"
      },
      {
        "airport_id": 120,
        "language_id": 2,
        "description": "San Cristóbal"
      },
      {
        "airport_id": 121,
        "language_id": 1,
        "description": "Athens"
      },
      {
        "airport_id": 121,
        "language_id": 2,
        "description": "Athene"
      },
      {
        "airport_id": 122,
        "language_id": 1,
        "description": "Heraklion International Airport"
      },
      {
        "airport_id": 122,
        "language_id": 2,
        "description": "Internationaal Vliegveld Heraklion"
      },
      {
        "airport_id": 123,
        "language_id": 1,
        "description": "London Gatwick"
      },
      {
        "airport_id": 123,
        "language_id": 2,
        "description": "Londen Gatwick"
      },
      {
        "airport_id": 124,
        "language_id": 1,
        "description": "London Heathrow"
      },
      {
        "airport_id": 124,
        "language_id": 2,
        "description": "Londen Heathrow"
      },
      {
        "airport_id": 125,
        "language_id": 1,
        "description": "Flores"
      },
      {
        "airport_id": 125,
        "language_id": 2,
        "description": "Flores"
      },
      {
        "airport_id": 126,
        "language_id": 1,
        "description": "Guatamala-City"
      },
      {
        "airport_id": 126,
        "language_id": 2,
        "description": "Guatamala City"
      },
      {
        "airport_id": 127,
        "language_id": 1,
        "description": "Georgetown"
      },
      {
        "airport_id": 127,
        "language_id": 2,
        "description": "Georgetown"
      },
      {
        "airport_id": 128,
        "language_id": 1,
        "description": "Budapest"
      },
      {
        "airport_id": 128,
        "language_id": 2,
        "description": "Boedapest"
      },
      {
        "airport_id": 129,
        "language_id": 1,
        "description": "Hong Kong"
      },
      {
        "airport_id": 129,
        "language_id": 2,
        "description": "Hong Kong"
      },
      {
        "airport_id": 130,
        "language_id": 1,
        "description": "Dublin"
      },
      {
        "airport_id": 130,
        "language_id": 2,
        "description": "Dublin"
      },
      {
        "airport_id": 131,
        "language_id": 1,
        "description": "Akureyri"
      },
      {
        "airport_id": 131,
        "language_id": 2,
        "description": "Akureyri"
      },
      {
        "airport_id": 132,
        "language_id": 1,
        "description": "Reijkjavik"
      },
      {
        "airport_id": 132,
        "language_id": 2,
        "description": "Reijkjavik"
      },
      {
        "airport_id": 133,
        "language_id": 1,
        "description": "Reijkjavik national"
      },
      {
        "airport_id": 133,
        "language_id": 2,
        "description": "Reijkjavik nationaal"
      },
      {
        "airport_id": 134,
        "language_id": 1,
        "description": "Agatti Island"
      },
      {
        "airport_id": 134,
        "language_id": 2,
        "description": "Agatti Eiland"
      },
      {
        "airport_id": 135,
        "language_id": 1,
        "description": "Agra"
      },
      {
        "airport_id": 135,
        "language_id": 2,
        "description": "Agra"
      },
      {
        "airport_id": 136,
        "language_id": 1,
        "description": "Ahmedabad"
      },
      {
        "airport_id": 136,
        "language_id": 2,
        "description": "Ahmedabad"
      },
      {
        "airport_id": 137,
        "language_id": 1,
        "description": "Allahabad"
      },
      {
        "airport_id": 137,
        "language_id": 2,
        "description": "Allahabad"
      },
      {
        "airport_id": 138,
        "language_id": 1,
        "description": "Amritsar"
      },
      {
        "airport_id": 138,
        "language_id": 2,
        "description": "Amritsar"
      },
      {
        "airport_id": 139,
        "language_id": 1,
        "description": "Geneve"
      },
      {
        "airport_id": 139,
        "language_id": 2,
        "description": "Geneve"
      },
      {
        "airport_id": 140,
        "language_id": 1,
        "description": "Zurich"
      },
      {
        "airport_id": 140,
        "language_id": 2,
        "description": "Zurich"
      },
      {
        "airport_id": 141,
        "language_id": 1,
        "description": "Gotborg"
      },
      {
        "airport_id": 141,
        "language_id": 2,
        "description": "Gotborg"
      },
      {
        "airport_id": 142,
        "language_id": 1,
        "description": "Durban airport"
      },
      {
        "airport_id": 142,
        "language_id": 2,
        "description": "Durban vliegveld"
      },
      {
        "airport_id": 143,
        "language_id": 1,
        "description": "East London"
      },
      {
        "airport_id": 143,
        "language_id": 2,
        "description": "Oost London"
      },
      {
        "airport_id": 144,
        "language_id": 1,
        "description": "George airport"
      },
      {
        "airport_id": 144,
        "language_id": 2,
        "description": "George vliegveld"
      },
      {
        "airport_id": 145,
        "language_id": 1,
        "description": "Hoedspruit"
      },
      {
        "airport_id": 145,
        "language_id": 2,
        "description": "Hoedspruit"
      },
      {
        "airport_id": 146,
        "language_id": 1,
        "description": "Kruger Mpumalanga International Airport"
      },
      {
        "airport_id": 146,
        "language_id": 2,
        "description": "Kruger Mpumalanga International Airport"
      },
      {
        "airport_id": 147,
        "language_id": 1,
        "description": "Johannesburg O.R. Tambo Airport"
      },
      {
        "airport_id": 147,
        "language_id": 2,
        "description": "Johannesburg O.R. Tambo Airport"
      },
      {
        "airport_id": 148,
        "language_id": 1,
        "description": "Phalaborwa Airport"
      },
      {
        "airport_id": 148,
        "language_id": 2,
        "description": "Phalaborwa vliegveld"
      },
      {
        "airport_id": 149,
        "language_id": 1,
        "description": "Polokwane"
      },
      {
        "airport_id": 149,
        "language_id": 2,
        "description": "Polokwane"
      },
      {
        "airport_id": 150,
        "language_id": 1,
        "description": "Port Elizabeth Airport"
      },
      {
        "airport_id": 150,
        "language_id": 2,
        "description": "Port Elizabeth Airport"
      },
      {
        "airport_id": 151,
        "language_id": 1,
        "description": "Richards Bay Airport"
      },
      {
        "airport_id": 151,
        "language_id": 2,
        "description": "Richards Bay Airport"
      },
      {
        "airport_id": 152,
        "language_id": 1,
        "description": "Skukuza Airport"
      },
      {
        "airport_id": 152,
        "language_id": 2,
        "description": "Skukuza vliegveld"
      },
      {
        "airport_id": 153,
        "language_id": 1,
        "description": "Umtata"
      },
      {
        "airport_id": 153,
        "language_id": 2,
        "description": "Umtata"
      },
      {
        "airport_id": 154,
        "language_id": 1,
        "description": "Upington"
      },
      {
        "airport_id": 154,
        "language_id": 2,
        "description": "Upington"
      },
      {
        "airport_id": 155,
        "language_id": 1,
        "description": "Harare Airport"
      },
      {
        "airport_id": 155,
        "language_id": 2,
        "description": "Harare"
      },
      {
        "airport_id": 156,
        "language_id": 1,
        "description": "Victoria Falls Airport"
      },
      {
        "airport_id": 156,
        "language_id": 2,
        "description": "Victoria Falls Airport"
      },
      {
        "airport_id": 157,
        "language_id": 1,
        "description": "Livingstone Airport"
      },
      {
        "airport_id": 157,
        "language_id": 2,
        "description": "Livingstone Airport"
      },
      {
        "airport_id": 158,
        "language_id": 1,
        "description": "Lusaka Airport"
      },
      {
        "airport_id": 158,
        "language_id": 2,
        "description": "Lusaka Airport"
      },
      {
        "airport_id": 159,
        "language_id": 1,
        "description": "Mfuwe Airport"
      },
      {
        "airport_id": 159,
        "language_id": 2,
        "description": "Mfuwe vliegveld"
      },
      {
        "airport_id": 160,
        "language_id": 1,
        "description": "Hanoi"
      },
      {
        "airport_id": 160,
        "language_id": 2,
        "description": "Hanoi"
      },
      {
        "airport_id": 161,
        "language_id": 1,
        "description": "Ho Chi Minh City Airport"
      },
      {
        "airport_id": 161,
        "language_id": 2,
        "description": "Ho Chi Minh City vliegveld"
      },
      {
        "airport_id": 162,
        "language_id": 1,
        "description": "Nha Trang Airport"
      },
      {
        "airport_id": 162,
        "language_id": 2,
        "description": "Nha Trang vliegveld"
      },
      {
        "airport_id": 163,
        "language_id": 1,
        "description": "Montevideo"
      },
      {
        "airport_id": 163,
        "language_id": 2,
        "description": "Montevideo"
      },
      {
        "airport_id": 164,
        "language_id": 1,
        "description": "Punta del Este"
      },
      {
        "airport_id": 164,
        "language_id": 2,
        "description": "Punta del Este"
      },
      {
        "airport_id": 165,
        "language_id": 1,
        "description": "Atlanta"
      },
      {
        "airport_id": 165,
        "language_id": 2,
        "description": "Atlanta"
      },
      {
        "airport_id": 166,
        "language_id": 1,
        "description": "Bozeman Montana"
      },
      {
        "airport_id": 166,
        "language_id": 2,
        "description": "Bozeman Montana"
      },
      {
        "airport_id": 167,
        "language_id": 1,
        "description": "Houston"
      },
      {
        "airport_id": 167,
        "language_id": 2,
        "description": "Houston"
      },
      {
        "airport_id": 168,
        "language_id": 1,
        "description": "Jackson Hole Wyoming"
      },
      {
        "airport_id": 168,
        "language_id": 2,
        "description": "Jackson Hole Wyoming"
      },
      {
        "airport_id": 169,
        "language_id": 1,
        "description": "Juneau"
      },
      {
        "airport_id": 169,
        "language_id": 2,
        "description": "Juneau"
      },
      {
        "airport_id": 170,
        "language_id": 1,
        "description": "Miami"
      },
      {
        "airport_id": 170,
        "language_id": 2,
        "description": "Miami"
      },
      {
        "airport_id": 171,
        "language_id": 1,
        "description": "Minneapolis"
      },
      {
        "airport_id": 171,
        "language_id": 2,
        "description": "Minneapolis"
      },
      {
        "airport_id": 172,
        "language_id": 1,
        "description": "New York JFK Airport"
      },
      {
        "airport_id": 172,
        "language_id": 2,
        "description": "New York JFK Airport"
      },
      {
        "airport_id": 173,
        "language_id": 1,
        "description": "Chicago O'Hare Airport"
      },
      {
        "airport_id": 173,
        "language_id": 2,
        "description": "Chicago O'Hare Airport"
      },
      {
        "airport_id": 174,
        "language_id": 1,
        "description": "Orlando"
      },
      {
        "airport_id": 174,
        "language_id": 2,
        "description": "Orlando"
      },
      {
        "airport_id": 175,
        "language_id": 1,
        "description": "Salt Lake City"
      },
      {
        "airport_id": 175,
        "language_id": 2,
        "description": "Salt Lake City"
      },
      {
        "airport_id": 176,
        "language_id": 1,
        "description": "San Francisco"
      },
      {
        "airport_id": 176,
        "language_id": 2,
        "description": "San Francisco"
      },
      {
        "airport_id": 177,
        "language_id": 1,
        "description": "Seattle"
      },
      {
        "airport_id": 177,
        "language_id": 2,
        "description": "Seattle"
      },
      {
        "airport_id": 178,
        "language_id": 1,
        "description": "Sitka"
      },
      {
        "airport_id": 178,
        "language_id": 2,
        "description": "Sitka"
      },
      {
        "airport_id": 179,
        "language_id": 1,
        "description": "Turks Caicos"
      },
      {
        "airport_id": 179,
        "language_id": 2,
        "description": "Turks Caicos"
      },
      {
        "airport_id": 180,
        "language_id": 1,
        "description": "Antalya"
      },
      {
        "airport_id": 180,
        "language_id": 2,
        "description": "Antalya"
      },
      {
        "airport_id": 181,
        "language_id": 1,
        "description": "Bodrum"
      },
      {
        "airport_id": 181,
        "language_id": 2,
        "description": "Bodrum"
      },
      {
        "airport_id": 182,
        "language_id": 1,
        "description": "Istanbul"
      },
      {
        "airport_id": 182,
        "language_id": 2,
        "description": "Istanbul"
      },
      {
        "airport_id": 183,
        "language_id": 1,
        "description": "Bangkok Don Muang Airport"
      },
      {
        "airport_id": 183,
        "language_id": 2,
        "description": "Bangkok Don Muang vliegveld"
      },
      {
        "airport_id": 184,
        "language_id": 1,
        "description": "BangkokSuvarnabhumi International Airport"
      },
      {
        "airport_id": 184,
        "language_id": 2,
        "description": "BangkokSuvarnabhumi International Airport"
      },
      {
        "airport_id": 185,
        "language_id": 1,
        "description": "Chiang Mai"
      },
      {
        "airport_id": 185,
        "language_id": 2,
        "description": "Chiang Mai"
      },
      {
        "airport_id": 186,
        "language_id": 1,
        "description": "Chiang Rai"
      },
      {
        "airport_id": 186,
        "language_id": 2,
        "description": "Chiang Rai"
      },
      {
        "airport_id": 187,
        "language_id": 1,
        "description": "Koh Samui Airport"
      },
      {
        "airport_id": 187,
        "language_id": 2,
        "description": "Koh Samui Airport"
      },
      {
        "airport_id": 188,
        "language_id": 1,
        "description": "Phuket Airport"
      },
      {
        "airport_id": 188,
        "language_id": 2,
        "description": "Phuket vliegveld"
      },
      {
        "airport_id": 189,
        "language_id": 1,
        "description": "Arusha Airport"
      },
      {
        "airport_id": 189,
        "language_id": 2,
        "description": "Arusha vliegveld"
      },
      {
        "airport_id": 190,
        "language_id": 1,
        "description": "Dar es Salaam Airport"
      },
      {
        "airport_id": 190,
        "language_id": 2,
        "description": "Dar es Salaam Airport"
      },
      {
        "airport_id": 191,
        "language_id": 1,
        "description": "Kilimanjaro International Airport"
      },
      {
        "airport_id": 191,
        "language_id": 2,
        "description": "Kilimanjaro International Airport"
      },
      {
        "airport_id": 192,
        "language_id": 1,
        "description": "Lake Manyara"
      },
      {
        "airport_id": 192,
        "language_id": 2,
        "description": "Lake Manyara"
      },
      {
        "airport_id": 193,
        "language_id": 1,
        "description": "Serengeti Seronera"
      },
      {
        "airport_id": 193,
        "language_id": 2,
        "description": "Serengeti Seronera"
      },
      {
        "airport_id": 194,
        "language_id": 1,
        "description": "Zanzibar Airport"
      },
      {
        "airport_id": 194,
        "language_id": 2,
        "description": "Zanzibar"
      },
      {
        "airport_id": 195,
        "language_id": 1,
        "description": "Taipei"
      },
      {
        "airport_id": 195,
        "language_id": 2,
        "description": "Taipei"
      },
      {
        "airport_id": 196,
        "language_id": 1,
        "description": "Paramaribo"
      },
      {
        "airport_id": 196,
        "language_id": 2,
        "description": "Paramaribo"
      },
      {
        "airport_id": 197,
        "language_id": 1,
        "description": "St. Lucia"
      },
      {
        "airport_id": 197,
        "language_id": 2,
        "description": "St. Lucia"
      },
      {
        "airport_id": 198,
        "language_id": 1,
        "description": "St. Barth"
      },
      {
        "airport_id": 198,
        "language_id": 2,
        "description": "St. Barth"
      },
      {
        "airport_id": 199,
        "language_id": 1,
        "description": "Colombo"
      },
      {
        "airport_id": 199,
        "language_id": 2,
        "description": "Colombo"
      },
      {
        "airport_id": 200,
        "language_id": 1,
        "description": "Longyearbyen"
      },
      {
        "airport_id": 200,
        "language_id": 2,
        "description": "Longyearbyen"
      },
      {
        "airport_id": 201,
        "language_id": 1,
        "description": "Barcelona"
      },
      {
        "airport_id": 201,
        "language_id": 2,
        "description": "Barcelona"
      },
      {
        "airport_id": 202,
        "language_id": 1,
        "description": "Madrid Airport"
      },
      {
        "airport_id": 202,
        "language_id": 2,
        "description": "Madrid Airport"
      },
      {
        "airport_id": 203,
        "language_id": 1,
        "description": "Malaga"
      },
      {
        "airport_id": 203,
        "language_id": 2,
        "description": "Malaga"
      },
      {
        "airport_id": 204,
        "language_id": 1,
        "description": "Palma de Mallorca"
      },
      {
        "airport_id": 204,
        "language_id": 2,
        "description": "Palma de Mallorca"
      },
      {
        "airport_id": 205,
        "language_id": 1,
        "description": "Tenerife"
      },
      {
        "airport_id": 205,
        "language_id": 2,
        "description": "Tenerife"
      },
      {
        "airport_id": 206,
        "language_id": 1,
        "description": "Singapore Airport"
      },
      {
        "airport_id": 206,
        "language_id": 2,
        "description": "Singapore Airport"
      },
      {
        "airport_id": 207,
        "language_id": 1,
        "description": "Praslin Airport"
      },
      {
        "airport_id": 207,
        "language_id": 2,
        "description": "Praslin vliegveld"
      },
      {
        "airport_id": 208,
        "language_id": 1,
        "description": "Seychelles International Airport"
      },
      {
        "airport_id": 208,
        "language_id": 2,
        "description": "Seychelles International Airport"
      },
      {
        "airport_id": 209,
        "language_id": 1,
        "description": "Kigali Airport"
      },
      {
        "airport_id": 209,
        "language_id": 2,
        "description": "Kigali vliegveld"
      },
      {
        "airport_id": 210,
        "language_id": 1,
        "description": "Anadyr"
      },
      {
        "airport_id": 210,
        "language_id": 2,
        "description": "Anadyr"
      },
      {
        "airport_id": 211,
        "language_id": 1,
        "description": "Moermansk"
      },
      {
        "airport_id": 211,
        "language_id": 2,
        "description": "Moermansk"
      },
      {
        "airport_id": 212,
        "language_id": 1,
        "description": "Moscow"
      },
      {
        "airport_id": 212,
        "language_id": 2,
        "description": "Moscow"
      },
      {
        "airport_id": 213,
        "language_id": 1,
        "description": "Petropavlovsk"
      },
      {
        "airport_id": 213,
        "language_id": 2,
        "description": "Petropavlovsk"
      },
      {
        "airport_id": 214,
        "language_id": 1,
        "description": "St. Petersburg"
      },
      {
        "airport_id": 214,
        "language_id": 2,
        "description": "St. Petersburg"
      },
      {
        "airport_id": 215,
        "language_id": 1,
        "description": "Rodrigues"
      },
      {
        "airport_id": 215,
        "language_id": 2,
        "description": "Rodrigues"
      },
      {
        "airport_id": 216,
        "language_id": 1,
        "description": "Doha"
      },
      {
        "airport_id": 216,
        "language_id": 2,
        "description": "Doha"
      },
      {
        "airport_id": 217,
        "language_id": 1,
        "description": "Faro"
      },
      {
        "airport_id": 217,
        "language_id": 2,
        "description": "Faro"
      },
      {
        "airport_id": 218,
        "language_id": 1,
        "description": "Horta"
      },
      {
        "airport_id": 218,
        "language_id": 2,
        "description": "Horta"
      },
      {
        "airport_id": 219,
        "language_id": 1,
        "description": "Lissabon"
      },
      {
        "airport_id": 219,
        "language_id": 2,
        "description": "Lissabon"
      },
      {
        "airport_id": 220,
        "language_id": 1,
        "description": "Arequipa"
      },
      {
        "airport_id": 220,
        "language_id": 2,
        "description": "Arequipa"
      },
      {
        "airport_id": 221,
        "language_id": 1,
        "description": "Cajamarca"
      },
      {
        "airport_id": 221,
        "language_id": 2,
        "description": "Cajamarca"
      },
      {
        "airport_id": 222,
        "language_id": 1,
        "description": "Chiclayo"
      },
      {
        "airport_id": 222,
        "language_id": 2,
        "description": "Chiclayo"
      },
      {
        "airport_id": 223,
        "language_id": 1,
        "description": "Cusco"
      },
      {
        "airport_id": 223,
        "language_id": 2,
        "description": "Cusco"
      },
      {
        "airport_id": 224,
        "language_id": 1,
        "description": "Iquitos"
      },
      {
        "airport_id": 224,
        "language_id": 2,
        "description": "Iquitos"
      },
      {
        "airport_id": 225,
        "language_id": 1,
        "description": "Juliaca"
      },
      {
        "airport_id": 225,
        "language_id": 2,
        "description": "Juliaca"
      },
      {
        "airport_id": 226,
        "language_id": 1,
        "description": "Lima Airport"
      },
      {
        "airport_id": 226,
        "language_id": 2,
        "description": "Lima Airport"
      },
      {
        "airport_id": 227,
        "language_id": 1,
        "description": "Puerto Maldonado"
      },
      {
        "airport_id": 227,
        "language_id": 2,
        "description": "Puerto Maldonado"
      },
      {
        "airport_id": 228,
        "language_id": 1,
        "description": "Tarapoto"
      },
      {
        "airport_id": 228,
        "language_id": 2,
        "description": "Tarapoto"
      },
      {
        "airport_id": 229,
        "language_id": 1,
        "description": "Trujillo"
      },
      {
        "airport_id": 229,
        "language_id": 2,
        "description": "Trujillo"
      },
      {
        "airport_id": 230,
        "language_id": 1,
        "description": "Asuncion"
      },
      {
        "airport_id": 230,
        "language_id": 2,
        "description": "Asuncion"
      },
      {
        "airport_id": 231,
        "language_id": 1,
        "description": "Bocas del Toro"
      },
      {
        "airport_id": 231,
        "language_id": 2,
        "description": "Bocas del Toro"
      },
      {
        "airport_id": 232,
        "language_id": 1,
        "description": "David"
      },
      {
        "airport_id": 232,
        "language_id": 2,
        "description": "David"
      },
      {
        "airport_id": 233,
        "language_id": 1,
        "description": "Panama City"
      },
      {
        "airport_id": 233,
        "language_id": 2,
        "description": "Panama Stad"
      },
      {
        "airport_id": 234,
        "language_id": 1,
        "description": "Panama-City National"
      },
      {
        "airport_id": 234,
        "language_id": 2,
        "description": "Panama-Stad Nationaal"
      },
      {
        "airport_id": 235,
        "language_id": 1,
        "description": "San Blas"
      },
      {
        "airport_id": 235,
        "language_id": 2,
        "description": "San Blas"
      },
      {
        "airport_id": 236,
        "language_id": 1,
        "description": "Innsbruck"
      },
      {
        "airport_id": 236,
        "language_id": 2,
        "description": "Innsbruck"
      },
      {
        "airport_id": 237,
        "language_id": 1,
        "description": "Wenen"
      },
      {
        "airport_id": 237,
        "language_id": 2,
        "description": "Wenen"
      },
      {
        "airport_id": 238,
        "language_id": 1,
        "description": "Oman Seeb Airport"
      },
      {
        "airport_id": 238,
        "language_id": 2,
        "description": "Oman Seeb vliegveld"
      },
      {
        "airport_id": 239,
        "language_id": 1,
        "description": "Kiev"
      },
      {
        "airport_id": 239,
        "language_id": 2,
        "description": "Kiev"
      },
      {
        "airport_id": 240,
        "language_id": 1,
        "description": "Kiev"
      },
      {
        "airport_id": 240,
        "language_id": 2,
        "description": "Kiev"
      },
      {
        "airport_id": 241,
        "language_id": 1,
        "description": "Entebbe Airport"
      },
      {
        "airport_id": 241,
        "language_id": 2,
        "description": "Entebbe vliegveld"
      },
      {
        "airport_id": 242,
        "language_id": 1,
        "description": "Bergen"
      },
      {
        "airport_id": 242,
        "language_id": 2,
        "description": "Bergen"
      },
      {
        "airport_id": 243,
        "language_id": 1,
        "description": "Oslo"
      },
      {
        "airport_id": 243,
        "language_id": 2,
        "description": "Oslo"
      },
      {
        "airport_id": 244,
        "language_id": 1,
        "description": "Tromso"
      },
      {
        "airport_id": 244,
        "language_id": 2,
        "description": "Tromso"
      },
      {
        "airport_id": 245,
        "language_id": 1,
        "description": "Auckland Airport"
      },
      {
        "airport_id": 245,
        "language_id": 2,
        "description": "Auckland Airport"
      },
      {
        "airport_id": 246,
        "language_id": 1,
        "description": "Christchurch Airport"
      },
      {
        "airport_id": 246,
        "language_id": 2,
        "description": "Christchurch Airport"
      },
      {
        "airport_id": 247,
        "language_id": 1,
        "description": "Wellington"
      },
      {
        "airport_id": 247,
        "language_id": 2,
        "description": "Wellington"
      },
      {
        "airport_id": 248,
        "language_id": 1,
        "description": "Kathmandu"
      },
      {
        "airport_id": 248,
        "language_id": 2,
        "description": "Kathmandu"
      },
      {
        "airport_id": 249,
        "language_id": 1,
        "description": "Meghauli"
      },
      {
        "airport_id": 249,
        "language_id": 2,
        "description": "Meghauli"
      },
      {
        "airport_id": 250,
        "language_id": 1,
        "description": "Aruba"
      },
      {
        "airport_id": 250,
        "language_id": 2,
        "description": "Aruba"
      },
      {
        "airport_id": 251,
        "language_id": 1,
        "description": "Bonaire Flamingo international"
      },
      {
        "airport_id": 251,
        "language_id": 2,
        "description": "Bonaire Flamingo internationaal"
      },
      {
        "airport_id": 252,
        "language_id": 1,
        "description": "Curaçao Hato International"
      },
      {
        "airport_id": 252,
        "language_id": 2,
        "description": "Curaçao Hato International"
      },
      {
        "airport_id": 253,
        "language_id": 1,
        "description": "St. Maarten International"
      },
      {
        "airport_id": 253,
        "language_id": 2,
        "description": "St. Maarten Internationaal"
      },
      {
        "airport_id": 254,
        "language_id": 1,
        "description": "Eindhoven"
      },
      {
        "airport_id": 254,
        "language_id": 2,
        "description": "Eindhoven"
      },
      {
        "airport_id": 255,
        "language_id": 1,
        "description": "Maastricht"
      },
      {
        "airport_id": 255,
        "language_id": 2,
        "description": "Maastricht"
      },
      {
        "airport_id": 256,
        "language_id": 1,
        "description": "Rotterdam"
      },
      {
        "airport_id": 256,
        "language_id": 2,
        "description": "Rotterdam"
      },
      {
        "airport_id": 257,
        "language_id": 1,
        "description": "Windhoek Airport"
      },
      {
        "airport_id": 257,
        "language_id": 2,
        "description": "Windhoek Airport"
      },
      {
        "airport_id": 258,
        "language_id": 1,
        "description": "Mustique"
      },
      {
        "airport_id": 258,
        "language_id": 2,
        "description": "Mustique"
      },
      {
        "airport_id": 259,
        "language_id": 1,
        "description": "Maputo Airport"
      },
      {
        "airport_id": 259,
        "language_id": 2,
        "description": "Maputo Airport"
      },
      {
        "airport_id": 260,
        "language_id": 1,
        "description": "Pemba Airport"
      },
      {
        "airport_id": 260,
        "language_id": 2,
        "description": "Pemba vliegveld"
      },
      {
        "airport_id": 261,
        "language_id": 1,
        "description": "Vilanculos Airport"
      },
      {
        "airport_id": 261,
        "language_id": 2,
        "description": "Vilanculos Airport"
      },
      {
        "airport_id": 262,
        "language_id": 1,
        "description": "Acapulco"
      },
      {
        "airport_id": 262,
        "language_id": 2,
        "description": "Acapulco"
      },
      {
        "airport_id": 263,
        "language_id": 1,
        "description": "Cancún International"
      },
      {
        "airport_id": 263,
        "language_id": 2,
        "description": "Cancún Internationaal"
      },
      {
        "airport_id": 264,
        "language_id": 1,
        "description": "Chihuahua"
      },
      {
        "airport_id": 264,
        "language_id": 2,
        "description": "Chihuahua"
      },
      {
        "airport_id": 265,
        "language_id": 1,
        "description": "Guadalajara"
      },
      {
        "airport_id": 265,
        "language_id": 2,
        "description": "Guadalajara"
      },
      {
        "airport_id": 266,
        "language_id": 1,
        "description": "Ixtapa-Zihuatanejo"
      },
      {
        "airport_id": 266,
        "language_id": 2,
        "description": "Ixtapa-Zihuatanejo"
      },
      {
        "airport_id": 267,
        "language_id": 1,
        "description": "La Paz Mexico"
      },
      {
        "airport_id": 267,
        "language_id": 2,
        "description": "La Paz Mexico"
      },
      {
        "airport_id": 268,
        "language_id": 1,
        "description": "Leon"
      },
      {
        "airport_id": 268,
        "language_id": 2,
        "description": "Leon"
      },
      {
        "airport_id": 269,
        "language_id": 1,
        "description": "Los Mochis"
      },
      {
        "airport_id": 269,
        "language_id": 2,
        "description": "Los Mochis"
      },
      {
        "airport_id": 270,
        "language_id": 1,
        "description": "Mexico-City International"
      },
      {
        "airport_id": 270,
        "language_id": 2,
        "description": "Mexico-Stad Internationaal"
      },
      {
        "airport_id": 271,
        "language_id": 1,
        "description": "Mérida"
      },
      {
        "airport_id": 271,
        "language_id": 2,
        "description": "Mérida"
      },
      {
        "airport_id": 272,
        "language_id": 1,
        "description": "Oaxaca"
      },
      {
        "airport_id": 272,
        "language_id": 2,
        "description": "Oaxaca"
      },
      {
        "airport_id": 273,
        "language_id": 1,
        "description": "Puerto Vallarta"
      },
      {
        "airport_id": 273,
        "language_id": 2,
        "description": "Puerto Vallarta"
      },
      {
        "airport_id": 274,
        "language_id": 1,
        "description": "San Diego"
      },
      {
        "airport_id": 274,
        "language_id": 2,
        "description": "San Diego"
      },
      {
        "airport_id": 275,
        "language_id": 1,
        "description": "San José Cabo San Lucas"
      },
      {
        "airport_id": 275,
        "language_id": 2,
        "description": "San José Cabo San Lucas"
      },
      {
        "airport_id": 276,
        "language_id": 1,
        "description": "Tijuana"
      },
      {
        "airport_id": 276,
        "language_id": 2,
        "description": "Tijuana"
      },
      {
        "airport_id": 277,
        "language_id": 1,
        "description": "Tuxtla Gutierrez"
      },
      {
        "airport_id": 277,
        "language_id": 2,
        "description": "Tuxtla Gutierrez"
      },
      {
        "airport_id": 278,
        "language_id": 1,
        "description": "Villahermosa"
      },
      {
        "airport_id": 278,
        "language_id": 2,
        "description": "Villahermosa"
      },
      {
        "airport_id": 279,
        "language_id": 1,
        "description": "Mauritius Airport"
      },
      {
        "airport_id": 279,
        "language_id": 2,
        "description": "Mauritius Airport"
      },
      {
        "airport_id": 280,
        "language_id": 1,
        "description": "Casablanca Mohamed V Airport"
      },
      {
        "airport_id": 280,
        "language_id": 2,
        "description": "Casablanca Mohamed V Airport Casablanca Mohamed V vliegveld"
      },
      {
        "airport_id": 281,
        "language_id": 1,
        "description": "Marrakech Airport"
      },
      {
        "airport_id": 281,
        "language_id": 2,
        "description": "Marrakech vliegveld"
      },
      {
        "airport_id": 282,
        "language_id": 1,
        "description": "Kuala Lumpur International Airport (KLIA)"
      },
      {
        "airport_id": 282,
        "language_id": 2,
        "description": "Kuala Lumpur International Airport (KLIA)"
      },
      {
        "airport_id": 283,
        "language_id": 1,
        "description": "Malé International Airport"
      },
      {
        "airport_id": 283,
        "language_id": 2,
        "description": "Malé International Airport"
      },
      {
        "airport_id": 284,
        "language_id": 1,
        "description": "Lilongwe Airport"
      },
      {
        "airport_id": 284,
        "language_id": 2,
        "description": "Lilongwe Airport"
      },
      {
        "airport_id": 285,
        "language_id": 1,
        "description": "Tripoli"
      },
      {
        "airport_id": 285,
        "language_id": 2,
        "description": "Tripoli"
      },
      {
        "airport_id": 286,
        "language_id": 1,
        "description": "La Réunion Airport"
      },
      {
        "airport_id": 286,
        "language_id": 2,
        "description": "La Réunion Airport"
      },
      {
        "airport_id": 287,
        "language_id": 1,
        "description": "Amboseli"
      },
      {
        "airport_id": 287,
        "language_id": 2,
        "description": "Amboseli"
      },
      {
        "airport_id": 288,
        "language_id": 1,
        "description": "Jomo Kenyatta International Airport"
      },
      {
        "airport_id": 288,
        "language_id": 2,
        "description": "Jomo Kenyatta International Airport"
      },
      {
        "airport_id": 289,
        "language_id": 1,
        "description": "Kisumu"
      },
      {
        "airport_id": 289,
        "language_id": 2,
        "description": "Kisumu"
      },
      {
        "airport_id": 290,
        "language_id": 1,
        "description": "Lamu Airport"
      },
      {
        "airport_id": 290,
        "language_id": 2,
        "description": "Lamu vliegveld"
      },
      {
        "airport_id": 291,
        "language_id": 1,
        "description": "Malindi Airport"
      },
      {
        "airport_id": 291,
        "language_id": 2,
        "description": "Malindi vliegveld"
      },
      {
        "airport_id": 292,
        "language_id": 1,
        "description": "Mombasa Airport"
      },
      {
        "airport_id": 292,
        "language_id": 2,
        "description": "Mombasa vliegveld"
      },
      {
        "airport_id": 293,
        "language_id": 1,
        "description": "Nanyuki"
      },
      {
        "airport_id": 293,
        "language_id": 2,
        "description": "Nanyuki"
      },
      {
        "airport_id": 294,
        "language_id": 1,
        "description": "Samburu"
      },
      {
        "airport_id": 294,
        "language_id": 2,
        "description": "Samburu"
      },
      {
        "airport_id": 295,
        "language_id": 1,
        "description": "Wilson Airport"
      },
      {
        "airport_id": 295,
        "language_id": 2,
        "description": "Wilson vliegveld"
      },
      {
        "airport_id": 296,
        "language_id": 1,
        "description": "Amman"
      },
      {
        "airport_id": 296,
        "language_id": 2,
        "description": "Amman"
      },
      {
        "airport_id": 297,
        "language_id": 1,
        "description": "Shikoku Island"
      },
      {
        "airport_id": 297,
        "language_id": 2,
        "description": "Shikoku Island"
      },
      {
        "airport_id": 298,
        "language_id": 1,
        "description": "Tokyo Haneda"
      },
      {
        "airport_id": 298,
        "language_id": 2,
        "description": "Tokyo Haneda"
      },
      {
        "airport_id": 299,
        "language_id": 1,
        "description": "Tokyo Narita"
      },
      {
        "airport_id": 299,
        "language_id": 2,
        "description": "Tokyo Narita"
      },
      {
        "airport_id": 300,
        "language_id": 1,
        "description": "Bari"
      },
      {
        "airport_id": 300,
        "language_id": 2,
        "description": "Bari"
      },
      {
        "airport_id": 301,
        "language_id": 1,
        "description": "Milan"
      },
      {
        "airport_id": 301,
        "language_id": 2,
        "description": "Milaan"
      },
      {
        "airport_id": 302,
        "language_id": 1,
        "description": "Milan Linate"
      },
      {
        "airport_id": 302,
        "language_id": 2,
        "description": "Milaan Linate"
      },
      {
        "airport_id": 303,
        "language_id": 1,
        "description": "Rome"
      },
      {
        "airport_id": 303,
        "language_id": 2,
        "description": "Rome"
      },
      {
        "airport_id": 304,
        "language_id": 1,
        "description": "Denpasar"
      },
      {
        "airport_id": 304,
        "language_id": 2,
        "description": "Denpasar"
      },
      {
        "airport_id": 305,
        "language_id": 1,
        "description": "Jakarta"
      },
      {
        "airport_id": 305,
        "language_id": 2,
        "description": "Jakarta"
      },
      {
        "airport_id": 306,
        "language_id": 1,
        "description": "Varanasi"
      },
      {
        "airport_id": 306,
        "language_id": 2,
        "description": "Varanasi"
      },
      {
        "airport_id": 307,
        "language_id": 1,
        "description": "Udaipur"
      },
      {
        "airport_id": 307,
        "language_id": 2,
        "description": "Udaipur"
      },
      {
        "airport_id": 308,
        "language_id": 1,
        "description": "Thiruvananthapuram"
      },
      {
        "airport_id": 308,
        "language_id": 2,
        "description": "Thiruvananthapuram"
      },
      {
        "airport_id": 309,
        "language_id": 1,
        "description": "Simla"
      },
      {
        "airport_id": 309,
        "language_id": 2,
        "description": "Simla"
      },
      {
        "airport_id": 310,
        "language_id": 1,
        "description": "Raipur"
      },
      {
        "airport_id": 310,
        "language_id": 2,
        "description": "Raipur"
      },
      {
        "airport_id": 311,
        "language_id": 1,
        "description": "Port Blair"
      },
      {
        "airport_id": 311,
        "language_id": 2,
        "description": "Port Blair"
      },
      {
        "airport_id": 312,
        "language_id": 1,
        "description": "Nagpur"
      },
      {
        "airport_id": 312,
        "language_id": 2,
        "description": "Nagpur"
      },
      {
        "airport_id": 313,
        "language_id": 1,
        "description": "Mysore"
      },
      {
        "airport_id": 313,
        "language_id": 2,
        "description": "Mysore"
      },
      {
        "airport_id": 314,
        "language_id": 1,
        "description": "Mumbai (Bombay)"
      },
      {
        "airport_id": 314,
        "language_id": 2,
        "description": "Mumbai (Bombay)"
      },
      {
        "airport_id": 315,
        "language_id": 1,
        "description": "Mangalore"
      },
      {
        "airport_id": 315,
        "language_id": 2,
        "description": "Mangalore"
      },
      {
        "airport_id": 316,
        "language_id": 1,
        "description": "Madurai"
      },
      {
        "airport_id": 316,
        "language_id": 2,
        "description": "Madurai"
      },
      {
        "airport_id": 317,
        "language_id": 1,
        "description": "Leh"
      },
      {
        "airport_id": 317,
        "language_id": 2,
        "description": "Leh"
      },
      {
        "airport_id": 318,
        "language_id": 1,
        "description": "Kozhikode"
      },
      {
        "airport_id": 318,
        "language_id": 2,
        "description": "Kozhikode"
      },
      {
        "airport_id": 319,
        "language_id": 1,
        "description": "Kolkata"
      },
      {
        "airport_id": 319,
        "language_id": 2,
        "description": "Kolkata"
      },
      {
        "airport_id": 320,
        "language_id": 1,
        "description": "Kochi"
      },
      {
        "airport_id": 320,
        "language_id": 2,
        "description": "Kochi"
      },
      {
        "airport_id": 321,
        "language_id": 1,
        "description": "Khajuraho"
      },
      {
        "airport_id": 321,
        "language_id": 2,
        "description": "Khajuraho"
      },
      {
        "airport_id": 322,
        "language_id": 1,
        "description": "Jorhat"
      },
      {
        "airport_id": 322,
        "language_id": 2,
        "description": "Jorhat"
      },
      {
        "airport_id": 323,
        "language_id": 1,
        "description": "Jodhpur"
      },
      {
        "airport_id": 323,
        "language_id": 2,
        "description": "Jodhpur"
      },
      {
        "airport_id": 324,
        "language_id": 1,
        "description": "Jaipur"
      },
      {
        "airport_id": 324,
        "language_id": 2,
        "description": "Jaipur"
      },
      {
        "airport_id": 325,
        "language_id": 1,
        "description": "Jabalpur"
      },
      {
        "airport_id": 325,
        "language_id": 2,
        "description": "Jabalpur"
      },
      {
        "airport_id": 326,
        "language_id": 1,
        "description": "Hyderabad"
      },
      {
        "airport_id": 326,
        "language_id": 2,
        "description": "Hyderabad"
      },
      {
        "airport_id": 327,
        "language_id": 1,
        "description": "Gwalior"
      },
      {
        "airport_id": 327,
        "language_id": 2,
        "description": "Gwalior"
      },
      {
        "airport_id": 328,
        "language_id": 1,
        "description": "Guwahati"
      },
      {
        "airport_id": 328,
        "language_id": 2,
        "description": "Guwahati"
      },
      {
        "airport_id": 329,
        "language_id": 1,
        "description": "Goa"
      },
      {
        "airport_id": 329,
        "language_id": 2,
        "description": "Goa"
      },
      {
        "airport_id": 330,
        "language_id": 1,
        "description": "Diu"
      },
      {
        "airport_id": 330,
        "language_id": 2,
        "description": "Diu"
      },
      {
        "airport_id": 331,
        "language_id": 1,
        "description": "Delhi"
      },
      {
        "airport_id": 331,
        "language_id": 2,
        "description": "Delhi"
      },
      {
        "airport_id": 332,
        "language_id": 1,
        "description": "Dehra Dun"
      },
      {
        "airport_id": 332,
        "language_id": 2,
        "description": "Dehra Dun"
      },
      {
        "airport_id": 333,
        "language_id": 1,
        "description": "Coimbatore"
      },
      {
        "airport_id": 333,
        "language_id": 2,
        "description": "Coimbatore"
      },
      {
        "airport_id": 334,
        "language_id": 1,
        "description": "Chennai"
      },
      {
        "airport_id": 334,
        "language_id": 2,
        "description": "Chennai"
      },
      {
        "airport_id": 335,
        "language_id": 1,
        "description": "Chandigarh"
      },
      {
        "airport_id": 335,
        "language_id": 2,
        "description": "Chandigarh"
      },
      {
        "airport_id": 336,
        "language_id": 1,
        "description": "Bhuj"
      },
      {
        "airport_id": 336,
        "language_id": 2,
        "description": "Bhuj"
      },
      {
        "airport_id": 337,
        "language_id": 1,
        "description": "Bhubaneswar"
      },
      {
        "airport_id": 337,
        "language_id": 2,
        "description": "Bhubaneswar"
      },
      {
        "airport_id": 338,
        "language_id": 1,
        "description": "Bhopal"
      },
      {
        "airport_id": 338,
        "language_id": 2,
        "description": "Bhopal"
      },
      {
        "airport_id": 339,
        "language_id": 1,
        "description": "Bangalore"
      },
      {
        "airport_id": 339,
        "language_id": 2,
        "description": "Bangalore"
      },
      {
        "airport_id": 340,
        "language_id": 1,
        "description": "Bagdogra"
      },
      {
        "airport_id": 340,
        "language_id": 2,
        "description": "Bagdogra"
      },
      {
        "airport_id": 341,
        "language_id": 1,
        "description": "Aurangabad"
      },
      {
        "airport_id": 341,
        "language_id": 2,
        "description": "Aurangabad"
      },
      {
        "airport_id": 342,
        "language_id": 1,
        "description": "Aitutaki Airport"
      },
      {
        "airport_id": 342,
        "language_id": 2,
        "description": "Aitutaki Airport"
      },
      {
        "airport_id": 343,
        "language_id": 1,
        "description": "Rarotonga Airport"
      },
      {
        "airport_id": 343,
        "language_id": 2,
        "description": "Rarotonga Airport"
      },
      {
        "airport_id": 344,
        "language_id": 1,
        "description": "Atiu Airport"
      },
      {
        "airport_id": 344,
        "language_id": 2,
        "description": "Atiu Airport"
      },
      {
        "airport_id": 345,
        "language_id": 1,
        "description": "Honolulu Airport"
      },
      {
        "airport_id": 345,
        "language_id": 2,
        "description": "Honolulu Airport"
      },
      {
        "airport_id": 346,
        "language_id": 1,
        "description": "Lihue - Kauai Airport"
      },
      {
        "airport_id": 346,
        "language_id": 2,
        "description": "Lihue - Kauai Airport"
      },
      {
        "airport_id": 347,
        "language_id": 1,
        "description": "Kahului - Maui Airport"
      },
      {
        "airport_id": 347,
        "language_id": 2,
        "description": "Kahului - Maui Airport"
      },
      {
        "airport_id": 348,
        "language_id": 1,
        "description": "Kona - Big Island Airport"
      },
      {
        "airport_id": 348,
        "language_id": 2,
        "description": "Kona - Big Island Airport"
      },
      {
        "airport_id": 349,
        "language_id": 1,
        "description": "Molokai Airport"
      },
      {
        "airport_id": 349,
        "language_id": 2,
        "description": "Molokai Airport"
      },
      {
        "airport_id": 350,
        "language_id": 1,
        "description": "Hilo - Big Island Airport"
      },
      {
        "airport_id": 350,
        "language_id": 2,
        "description": "Hilo - Big Island Airport"
      },
      {
        "airport_id": 351,
        "language_id": 1,
        "description": "Lanai Airport"
      },
      {
        "airport_id": 351,
        "language_id": 2,
        "description": "Lanai Airport"
      },
      {
        "airport_id": 353,
        "language_id": 1,
        "description": "Seoul - Incheon Airport"
      },
      {
        "airport_id": 353,
        "language_id": 2,
        "description": "Seoul - Incheon Airport"
      },
      {
        "airport_id": 354,
        "language_id": 1,
        "description": "Tanna Airport"
      },
      {
        "airport_id": 354,
        "language_id": 2,
        "description": "Tanna Airport"
      },
      {
        "airport_id": 355,
        "language_id": 1,
        "description": "Tikehau Airport"
      },
      {
        "airport_id": 355,
        "language_id": 2,
        "description": "Tikehau Airport"
      },
      {
        "airport_id": 356,
        "language_id": 1,
        "description": "Suva Airport"
      },
      {
        "airport_id": 356,
        "language_id": 2,
        "description": "Suva Airport"
      },
      {
        "airport_id": 357,
        "language_id": 1,
        "description": "Savusavu Airport"
      },
      {
        "airport_id": 357,
        "language_id": 2,
        "description": "Savusavu Airport"
      },
      {
        "airport_id": 358,
        "language_id": 1,
        "description": "Rurutu Airport"
      },
      {
        "airport_id": 358,
        "language_id": 2,
        "description": "Rurutu Airport"
      },
      {
        "airport_id": 359,
        "language_id": 1,
        "description": "Rangiroa Airport"
      },
      {
        "airport_id": 359,
        "language_id": 2,
        "description": "Rangiroa Airport"
      },
      {
        "airport_id": 360,
        "language_id": 1,
        "description": "Raivavae Airport"
      },
      {
        "airport_id": 360,
        "language_id": 2,
        "description": "Raivavae Airport"
      },
      {
        "airport_id": 361,
        "language_id": 1,
        "description": "Rairua Airport"
      },
      {
        "airport_id": 361,
        "language_id": 2,
        "description": "Rairua Airport"
      },
      {
        "airport_id": 362,
        "language_id": 1,
        "description": "Raiatea Airport"
      },
      {
        "airport_id": 362,
        "language_id": 2,
        "description": "Raiatea Airport"
      },
      {
        "airport_id": 363,
        "language_id": 1,
        "description": "Queenstown Airport"
      },
      {
        "airport_id": 363,
        "language_id": 2,
        "description": "Queenstown Airport"
      },
      {
        "airport_id": 364,
        "language_id": 1,
        "description": "Port Vila Airport"
      },
      {
        "airport_id": 364,
        "language_id": 2,
        "description": "Port Vila Airport"
      },
      {
        "airport_id": 365,
        "language_id": 1,
        "description": "Papeete Airport"
      },
      {
        "airport_id": 365,
        "language_id": 2,
        "description": "Papeete Airport"
      },
      {
        "airport_id": 366,
        "language_id": 1,
        "description": "Nuku Hiva Airport"
      },
      {
        "airport_id": 366,
        "language_id": 2,
        "description": "Nuku Hiva Airport"
      },
      {
        "airport_id": 367,
        "language_id": 1,
        "description": "Ouvea Airport"
      },
      {
        "airport_id": 367,
        "language_id": 2,
        "description": "Ouvea Airport"
      },
      {
        "airport_id": 368,
        "language_id": 1,
        "description": "Osaka - Kansai Airport"
      },
      {
        "airport_id": 368,
        "language_id": 2,
        "description": "Osaka - Kansai Airport"
      },
      {
        "airport_id": 369,
        "language_id": 1,
        "description": "Noumea Airport"
      },
      {
        "airport_id": 369,
        "language_id": 2,
        "description": "Noumea Airport"
      },
      {
        "airport_id": 370,
        "language_id": 1,
        "description": "Norsup - Malekula Airport"
      },
      {
        "airport_id": 370,
        "language_id": 2,
        "description": "Norsup - Malekula Airport"
      },
      {
        "airport_id": 371,
        "language_id": 1,
        "description": "Niue Airport"
      },
      {
        "airport_id": 371,
        "language_id": 2,
        "description": "Niue Airport"
      },
      {
        "airport_id": 372,
        "language_id": 1,
        "description": "Nelson Airport"
      },
      {
        "airport_id": 372,
        "language_id": 2,
        "description": "Nelson Airport"
      },
      {
        "airport_id": 373,
        "language_id": 1,
        "description": "Napier Airport"
      },
      {
        "airport_id": 373,
        "language_id": 2,
        "description": "Napier Airport"
      },
      {
        "airport_id": 374,
        "language_id": 1,
        "description": "Nadi Airport"
      },
      {
        "airport_id": 374,
        "language_id": 2,
        "description": "Nadi Airport"
      },
      {
        "airport_id": 375,
        "language_id": 1,
        "description": "Moorea Airport"
      },
      {
        "airport_id": 375,
        "language_id": 2,
        "description": "Moorea Airport"
      },
      {
        "airport_id": 376,
        "language_id": 1,
        "description": "Maupiti Airport"
      },
      {
        "airport_id": 376,
        "language_id": 2,
        "description": "Maupiti Airport"
      },
      {
        "airport_id": 377,
        "language_id": 1,
        "description": "Mauke Airport"
      },
      {
        "airport_id": 377,
        "language_id": 2,
        "description": "Mauke Airport"
      },
      {
        "airport_id": 378,
        "language_id": 1,
        "description": "Mataiva Airport"
      },
      {
        "airport_id": 378,
        "language_id": 2,
        "description": "Mataiva Airport"
      },
      {
        "airport_id": 379,
        "language_id": 1,
        "description": "Taveuni Airport"
      },
      {
        "airport_id": 379,
        "language_id": 2,
        "description": "Taveuni Airport"
      },
      {
        "airport_id": 380,
        "language_id": 1,
        "description": "Manihi Airport"
      },
      {
        "airport_id": 380,
        "language_id": 2,
        "description": "Manihi Airport"
      },
      {
        "airport_id": 381,
        "language_id": 1,
        "description": "Lifou Airport"
      },
      {
        "airport_id": 381,
        "language_id": 2,
        "description": "Lifou Airport"
      },
      {
        "airport_id": 382,
        "language_id": 1,
        "description": "Launceston Airport"
      },
      {
        "airport_id": 382,
        "language_id": 2,
        "description": "Launceston Airport"
      },
      {
        "airport_id": 383,
        "language_id": 1,
        "description": "Labasa Airport"
      },
      {
        "airport_id": 383,
        "language_id": 2,
        "description": "Labasa Airport"
      },
      {
        "airport_id": 384,
        "language_id": 1,
        "description": "Kone Airport"
      },
      {
        "airport_id": 384,
        "language_id": 2,
        "description": "Kone Airport"
      },
      {
        "airport_id": 385,
        "language_id": 1,
        "description": "Kadavu Airport"
      },
      {
        "airport_id": 385,
        "language_id": 2,
        "description": "Kadavu Airport"
      },
      {
        "airport_id": 386,
        "language_id": 1,
        "description": "IIe de Pines Airport"
      },
      {
        "airport_id": 386,
        "language_id": 2,
        "description": "IIe de Pines Airport"
      },
      {
        "airport_id": 387,
        "language_id": 1,
        "description": "Huahine Airport"
      },
      {
        "airport_id": 387,
        "language_id": 2,
        "description": "Huahine Airport"
      },
      {
        "airport_id": 388,
        "language_id": 1,
        "description": "Hobart Airport"
      },
      {
        "airport_id": 388,
        "language_id": 2,
        "description": "Hobart Airport"
      },
      {
        "airport_id": 389,
        "language_id": 1,
        "description": "Hiva Oa Airport"
      },
      {
        "airport_id": 389,
        "language_id": 2,
        "description": "Hiva Oa Airport"
      },
      {
        "airport_id": 390,
        "language_id": 1,
        "description": "Hervey Bay Airport"
      },
      {
        "airport_id": 390,
        "language_id": 2,
        "description": "Hervey Bay Airport"
      },
      {
        "airport_id": 391,
        "language_id": 1,
        "description": "Hamilton Airport"
      },
      {
        "airport_id": 391,
        "language_id": 2,
        "description": "Hamilton Airport"
      },
      {
        "airport_id": 392,
        "language_id": 1,
        "description": "Guam Airport"
      },
      {
        "airport_id": 392,
        "language_id": 2,
        "description": "Guam Airport"
      },
      {
        "airport_id": 393,
        "language_id": 1,
        "description": "Ha'apai Airport"
      },
      {
        "airport_id": 393,
        "language_id": 2,
        "description": "Ha'apai Airport"
      },
      {
        "airport_id": 394,
        "language_id": 1,
        "description": "Fakarava Airport"
      },
      {
        "airport_id": 394,
        "language_id": 2,
        "description": "Fakarava Airport"
      },
      {
        "airport_id": 395,
        "language_id": 1,
        "description": "Espiritu Santo Airport"
      },
      {
        "airport_id": 395,
        "language_id": 2,
        "description": "Espiritu Santo Airport"
      },
      {
        "airport_id": 396,
        "language_id": 1,
        "description": "Dunedin Airport"
      },
      {
        "airport_id": 396,
        "language_id": 2,
        "description": "Dunedin Airport"
      },
      {
        "airport_id": 397,
        "language_id": 1,
        "description": "Devonport Airport"
      },
      {
        "airport_id": 397,
        "language_id": 2,
        "description": "Devonport Airport"
      },
      {
        "airport_id": 398,
        "language_id": 1,
        "description": "Denver Airport"
      },
      {
        "airport_id": 398,
        "language_id": 2,
        "description": "Denver Airport"
      },
      {
        "airport_id": 399,
        "language_id": 1,
        "description": "Canberra Airport"
      },
      {
        "airport_id": 399,
        "language_id": 2,
        "description": "Canberra Airport"
      },
      {
        "airport_id": 400,
        "language_id": 1,
        "description": "Byron Bay Airport"
      },
      {
        "airport_id": 400,
        "language_id": 2,
        "description": "Byron Bay Airport"
      },
      {
        "airport_id": 401,
        "language_id": 1,
        "description": "Broome Airport"
      },
      {
        "airport_id": 401,
        "language_id": 2,
        "description": "Broome Airport"
      },
      {
        "airport_id": 402,
        "language_id": 1,
        "description": "Brisbane Airport"
      },
      {
        "airport_id": 402,
        "language_id": 2,
        "description": "Brisbane Airport"
      },
      {
        "airport_id": 403,
        "language_id": 1,
        "description": "Bora Bora Airport"
      },
      {
        "airport_id": 403,
        "language_id": 2,
        "description": "Bora Bora Airport"
      },
      {
        "airport_id": 404,
        "language_id": 1,
        "description": "Apia Airport"
      },
      {
        "airport_id": 404,
        "language_id": 2,
        "description": "Apia Airport"
      },
      {
        "airport_id": 405,
        "language_id": 1,
        "description": "Taupo Airport"
      },
      {
        "airport_id": 405,
        "language_id": 2,
        "description": "Taupo Airport"
      },
      {
        "airport_id": 406,
        "language_id": 1,
        "description": "Te Anau Airport"
      },
      {
        "airport_id": 406,
        "language_id": 2,
        "description": "Te Anau Airport"
      },
      {
        "airport_id": 407,
        "language_id": 1,
        "description": "Tongatapu Airport"
      },
      {
        "airport_id": 407,
        "language_id": 2,
        "description": "Tongatapu Airport"
      },
      {
        "airport_id": 408,
        "language_id": 1,
        "description": "Townsville Airport"
      },
      {
        "airport_id": 408,
        "language_id": 2,
        "description": "Townsville Airport"
      },
      {
        "airport_id": 409,
        "language_id": 1,
        "description": "Vava'u Airport"
      },
      {
        "airport_id": 409,
        "language_id": 2,
        "description": "Vava'u Airport"
      },
      {
        "airport_id": 410,
        "language_id": 1,
        "description": "Ua Po Airport"
      },
      {
        "airport_id": 410,
        "language_id": 2,
        "description": "Ua Po Airport"
      },
      {
        "airport_id": 411,
        "language_id": 1,
        "description": "Rockhampton Airport"
      },
      {
        "airport_id": 411,
        "language_id": 2,
        "description": "Rockhampton Airport"
      },
      {
        "airport_id": 412,
        "language_id": 1,
        "description": "Washington Dulles Airport"
      },
      {
        "airport_id": 412,
        "language_id": 2,
        "description": "Washington Dulles Airport"
      },
      {
        "airport_id": 413,
        "language_id": 1,
        "description": "Vancouver Airport"
      },
      {
        "airport_id": 413,
        "language_id": 2,
        "description": "Vancouver Airport"
      },
      {
        "airport_id": 414,
        "language_id": 1,
        "description": "Los Angeles Airport"
      },
      {
        "airport_id": 414,
        "language_id": 2,
        "description": "Los Angeles Airport"
      },
      {
        "airport_id": 415,
        "language_id": 1,
        "description": "Newark - New York Airport"
      },
      {
        "airport_id": 415,
        "language_id": 2,
        "description": "Newark - New York Airport"
      },
      {
        "airport_id": 416,
        "language_id": 1,
        "description": "Cocos Island Airport"
      },
      {
        "airport_id": 416,
        "language_id": 2,
        "description": "Cocos Island Airport"
      },
      {
        "airport_id": 417,
        "language_id": 1,
        "description": "Chrismas Island Airport"
      },
      {
        "airport_id": 417,
        "language_id": 2,
        "description": "Chrismas Island Airport"
      },
      {
        "airport_id": 418,
        "language_id": 1,
        "description": "Port Moresby"
      },
      {
        "airport_id": 418,
        "language_id": 2,
        "description": "Port Moresby"
      },
      {
        "airport_id": 419,
        "language_id": 1,
        "description": "Rabaul"
      },
      {
        "airport_id": 419,
        "language_id": 2,
        "description": "Rabaul"
      },
      {
        "airport_id": 420,
        "language_id": 1,
        "description": "Kavieng Airport"
      },
      {
        "airport_id": 420,
        "language_id": 2,
        "description": "Kavieng Airport"
      },
      {
        "airport_id": 421,
        "language_id": 1,
        "description": "Tufi Airport"
      },
      {
        "airport_id": 421,
        "language_id": 2,
        "description": "Tufi Airport"
      },
      {
        "airport_id": 422,
        "language_id": 1,
        "description": "Mount Hagen"
      },
      {
        "airport_id": 422,
        "language_id": 2,
        "description": "Mount Hagen"
      },
      {
        "airport_id": 423,
        "language_id": 1,
        "description": "Halifax"
      },
      {
        "airport_id": 423,
        "language_id": 2,
        "description": "Halifax"
      },
      {
        "airport_id": 424,
        "language_id": 1,
        "description": "Shanghai Hongqiao Airport"
      },
      {
        "airport_id": 424,
        "language_id": 2,
        "description": "Shanghai Hongqiao Airport"
      },
      {
        "airport_id": 425,
        "language_id": 1,
        "description": "Shanghai Pudong Airport"
      },
      {
        "airport_id": 425,
        "language_id": 2,
        "description": "Shanghai Pudong Airport"
      },
      {
        "airport_id": 426,
        "language_id": 1,
        "description": "Las Vegas"
      },
      {
        "airport_id": 426,
        "language_id": 2,
        "description": "Las Vegas"
      },
      {
        "airport_id": 427,
        "language_id": 1,
        "description": "Guangzhou Airport"
      },
      {
        "airport_id": 427,
        "language_id": 2,
        "description": "Guangzhou Airport"
      },
      {
        "airport_id": 429,
        "language_id": 1,
        "description": "Madang"
      },
      {
        "airport_id": 429,
        "language_id": 2,
        "description": "Madang"
      },
      {
        "airport_id": 430,
        "language_id": 1,
        "description": "Wewak"
      },
      {
        "airport_id": 430,
        "language_id": 2,
        "description": "Wewak"
      },
      {
        "airport_id": 431,
        "language_id": 1,
        "description": "Hoskins"
      },
      {
        "airport_id": 431,
        "language_id": 2,
        "description": "Hoskins"
      },
      {
        "airport_id": 432,
        "language_id": 1,
        "description": "Honiara Airport"
      },
      {
        "airport_id": 432,
        "language_id": 2,
        "description": "Honiara Airport"
      },
      {
        "airport_id": 433,
        "language_id": 1,
        "description": "Munda Airport"
      },
      {
        "airport_id": 433,
        "language_id": 2,
        "description": "Munda Airport"
      },
      {
        "airport_id": 434,
        "language_id": 1,
        "description": "Gizo Airport"
      },
      {
        "airport_id": 434,
        "language_id": 2,
        "description": "Gizo Airport"
      },
      {
        "airport_id": 435,
        "language_id": 1,
        "description": "Seghe Airport"
      },
      {
        "airport_id": 435,
        "language_id": 2,
        "description": "Seghe Airport"
      },
      {
        "airport_id": 436,
        "language_id": 1,
        "description": "Alotau Airport"
      },
      {
        "airport_id": 436,
        "language_id": 2,
        "description": "Alotau Airport"
      },
      {
        "airport_id": 437,
        "language_id": 1,
        "description": "Majuro"
      },
      {
        "airport_id": 437,
        "language_id": 2,
        "description": "Majuro"
      },
      {
        "airport_id": 438,
        "language_id": 1,
        "description": "Proserpine"
      },
      {
        "airport_id": 438,
        "language_id": 2,
        "description": "Proserpine"
      },
      {
        "airport_id": 439,
        "language_id": 1,
        "description": "Blantyre Airport"
      },
      {
        "airport_id": 439,
        "language_id": 2,
        "description": "Blantyre Airport"
      },
      {
        "airport_id": 440,
        "language_id": 1,
        "description": "Inhambane Airport"
      },
      {
        "airport_id": 440,
        "language_id": 2,
        "description": "Inhambane Airport"
      },
      {
        "airport_id": 441,
        "language_id": 1,
        "description": "Port Hedland"
      },
      {
        "airport_id": 441,
        "language_id": 2,
        "description": "Port Hedland"
      },
      {
        "airport_id": 442,
        "language_id": 1,
        "description": "Koror"
      },
      {
        "airport_id": 442,
        "language_id": 2,
        "description": "Koror"
      },
      {
        "airport_id": 443,
        "language_id": 1,
        "description": "Bogota el Dorado Airport"
      },
      {
        "airport_id": 443,
        "language_id": 2,
        "description": "Bogota el Dorado Airport"
      },
      {
        "airport_id": 444,
        "language_id": 1,
        "description": "Kalgoorlie"
      },
      {
        "airport_id": 444,
        "language_id": 2,
        "description": "Kalgoorlie"
      },
      {
        "airport_id": 445,
        "language_id": 1,
        "description": "Coolangatta Gold Coast Airport"
      },
      {
        "airport_id": 445,
        "language_id": 2,
        "description": "Coolangatta Gold Coast Airport"
      },
      {
        "airport_id": 446,
        "language_id": 1,
        "description": "Anchorage"
      },
      {
        "airport_id": 446,
        "language_id": 2,
        "description": "Anchorage"
      },
      {
        "airport_id": 447,
        "language_id": 1,
        "description": "Fukuoka"
      },
      {
        "airport_id": 447,
        "language_id": 2,
        "description": "Fukuoka"
      },
      {
        "airport_id": 448,
        "language_id": 1,
        "description": "Antananarivo"
      },
      {
        "airport_id": 448,
        "language_id": 2,
        "description": "Antananarivo"
      },
      {
        "airport_id": 449,
        "language_id": 1,
        "description": "Diego Suarez"
      },
      {
        "airport_id": 449,
        "language_id": 2,
        "description": "Diego Suarez"
      },
      {
        "airport_id": 450,
        "language_id": 1,
        "description": "Nosy Be"
      },
      {
        "airport_id": 450,
        "language_id": 2,
        "description": "Nosy Be"
      },
      {
        "airport_id": 451,
        "language_id": 1,
        "description": "Sainte Marie"
      },
      {
        "airport_id": 451,
        "language_id": 2,
        "description": "Sainte Marie"
      }
    ];

    
    this.airports = [
      {
        "id": 1,
        "iata_code": "AMS"
      },
      {
        "id": 2,
        "iata_code": "CPT"
      },
      {
        "id": 3,
        "iata_code": "BRU"
      },
      {
        "id": 4,
        "iata_code": "EZE"
      },
      {
        "id": 5,
        "iata_code": "AUH"
      },
      {
        "id": 6,
        "iata_code": "ANU"
      },
      {
        "id": 7,
        "iata_code": "BBQ"
      },
      {
        "id": 8,
        "iata_code": "BRC"
      },
      {
        "id": 9,
        "iata_code": "AEP"
      },
      {
        "id": 10,
        "iata_code": "FTE"
      },
      {
        "id": 11,
        "iata_code": "COR"
      },
      {
        "id": 12,
        "iata_code": "CNQ"
      },
      {
        "id": 13,
        "iata_code": "FMA"
      },
      {
        "id": 14,
        "iata_code": "IRJ"
      },
      {
        "id": 15,
        "iata_code": "MDQ"
      },
      {
        "id": 16,
        "iata_code": "MDZ"
      },
      {
        "id": 17,
        "iata_code": "PSS"
      },
      {
        "id": 18,
        "iata_code": "IGR"
      },
      {
        "id": 19,
        "iata_code": "RGL"
      },
      {
        "id": 20,
        "iata_code": "SLA"
      },
      {
        "id": 21,
        "iata_code": "UAQ"
      },
      {
        "id": 22,
        "iata_code": "REL"
      },
      {
        "id": 23,
        "iata_code": "TUC"
      },
      {
        "id": 24,
        "iata_code": "USH"
      },
      {
        "id": 25,
        "iata_code": "ADL"
      },
      {
        "id": 26,
        "iata_code": "ASP"
      },
      {
        "id": 27,
        "iata_code": "AYQ"
      },
      {
        "id": 28,
        "iata_code": "CNS"
      },
      {
        "id": 29,
        "iata_code": "DRW"
      },
      {
        "id": 30,
        "iata_code": "MEL"
      },
      {
        "id": 31,
        "iata_code": "PER"
      },
      {
        "id": 32,
        "iata_code": "SYD"
      },
      {
        "id": 33,
        "iata_code": "NAS"
      },
      {
        "id": 34,
        "iata_code": "BAH"
      },
      {
        "id": 35,
        "iata_code": "BGI"
      },
      {
        "id": 36,
        "iata_code": "ZYR"
      },
      {
        "id": 37,
        "iata_code": "ZWE"
      },
      {
        "id": 38,
        "iata_code": "BZE"
      },
      {
        "id": 39,
        "iata_code": "SPR"
      },
      {
        "id": 40,
        "iata_code": "PBH"
      },
      {
        "id": 41,
        "iata_code": "LPB"
      },
      {
        "id": 42,
        "iata_code": "GBE"
      },
      {
        "id": 43,
        "iata_code": "BBK"
      },
      {
        "id": 44,
        "iata_code": "MUB"
      },
      {
        "id": 45,
        "iata_code": "AIR"
      },
      {
        "id": 46,
        "iata_code": "AFL"
      },
      {
        "id": 47,
        "iata_code": "BHZ"
      },
      {
        "id": 48,
        "iata_code": "BSB"
      },
      {
        "id": 49,
        "iata_code": "CGR"
      },
      {
        "id": 50,
        "iata_code": "CGB"
      },
      {
        "id": 51,
        "iata_code": "FEN"
      },
      {
        "id": 52,
        "iata_code": "FLN"
      },
      {
        "id": 53,
        "iata_code": "IGU"
      },
      {
        "id": 54,
        "iata_code": "IOS"
      },
      {
        "id": 55,
        "iata_code": "MAO"
      },
      {
        "id": 56,
        "iata_code": "NAT"
      },
      {
        "id": 57,
        "iata_code": "BPS"
      },
      {
        "id": 58,
        "iata_code": "REC"
      },
      {
        "id": 59,
        "iata_code": "GIG"
      },
      {
        "id": 60,
        "iata_code": "SSA"
      },
      {
        "id": 61,
        "iata_code": "SLZ"
      },
      {
        "id": 62,
        "iata_code": "GRU"
      },
      {
        "id": 63,
        "iata_code": "CGH"
      },
      {
        "id": 64,
        "iata_code": "TFF"
      },
      {
        "id": 65,
        "iata_code": "PNH"
      },
      {
        "id": 66,
        "iata_code": "REP"
      },
      {
        "id": 67,
        "iata_code": "YYT"
      },
      {
        "id": 68,
        "iata_code": "YYZ"
      },
      {
        "id": 69,
        "iata_code": "YWG"
      },
      {
        "id": 70,
        "iata_code": "CIW"
      },
      {
        "id": 71,
        "iata_code": "BGF"
      },
      {
        "id": 72,
        "iata_code": "ANF"
      },
      {
        "id": 73,
        "iata_code": "ARI"
      },
      {
        "id": 74,
        "iata_code": "BBA"
      },
      {
        "id": 75,
        "iata_code": "CJC"
      },
      {
        "id": 76,
        "iata_code": "IPC"
      },
      {
        "id": 77,
        "iata_code": "IQQ"
      },
      {
        "id": 78,
        "iata_code": "LSC"
      },
      {
        "id": 79,
        "iata_code": "PMC"
      },
      {
        "id": 80,
        "iata_code": "PUQ"
      },
      {
        "id": 81,
        "iata_code": "SCL"
      },
      {
        "id": 82,
        "iata_code": "ZCO"
      },
      {
        "id": 83,
        "iata_code": "PEK"
      },
      {
        "id": 84,
        "iata_code": "CTU"
      },
      {
        "id": 85,
        "iata_code": "LIR"
      },
      {
        "id": 86,
        "iata_code": "PMZ"
      },
      {
        "id": 87,
        "iata_code": "XQP"
      },
      {
        "id": 88,
        "iata_code": "SJO"
      },
      {
        "id": 89,
        "iata_code": "TMU"
      },
      {
        "id": 90,
        "iata_code": "TTQ"
      },
      {
        "id": 91,
        "iata_code": "HAV"
      },
      {
        "id": 92,
        "iata_code": "VRA"
      },
      {
        "id": 93,
        "iata_code": "PFO"
      },
      {
        "id": 94,
        "iata_code": "CPH"
      },
      {
        "id": 95,
        "iata_code": "DXB"
      },
      {
        "id": 96,
        "iata_code": "DUS"
      },
      {
        "id": 97,
        "iata_code": "FRA"
      },
      {
        "id": 98,
        "iata_code": "HAM"
      },
      {
        "id": 99,
        "iata_code": "MUC"
      },
      {
        "id": 100,
        "iata_code": "NRN"
      },
      {
        "id": 101,
        "iata_code": "OCC"
      },
      {
        "id": 102,
        "iata_code": "CUE"
      },
      {
        "id": 103,
        "iata_code": "GYE"
      },
      {
        "id": 104,
        "iata_code": "MEC"
      },
      {
        "id": 105,
        "iata_code": "UIO"
      },
      {
        "id": 106,
        "iata_code": "CAI"
      },
      {
        "id": 107,
        "iata_code": "HRG"
      },
      {
        "id": 108,
        "iata_code": "LXR"
      },
      {
        "id": 109,
        "iata_code": "ADD"
      },
      {
        "id": 110,
        "iata_code": "MPN"
      },
      {
        "id": 111,
        "iata_code": "PSY"
      },
      {
        "id": 112,
        "iata_code": "MNL"
      },
      {
        "id": 113,
        "iata_code": "HEL"
      },
      {
        "id": 114,
        "iata_code": "KAJ"
      },
      {
        "id": 115,
        "iata_code": "OUL"
      },
      {
        "id": 116,
        "iata_code": "NCE"
      },
      {
        "id": 117,
        "iata_code": "CDG"
      },
      {
        "id": 118,
        "iata_code": "ORY"
      },
      {
        "id": 119,
        "iata_code": "GPS"
      },
      {
        "id": 120,
        "iata_code": "SCY"
      },
      {
        "id": 121,
        "iata_code": "ATH"
      },
      {
        "id": 122,
        "iata_code": "HKL"
      },
      {
        "id": 123,
        "iata_code": "LGW"
      },
      {
        "id": 124,
        "iata_code": "LHR"
      },
      {
        "id": 125,
        "iata_code": "FRS"
      },
      {
        "id": 126,
        "iata_code": "GUA"
      },
      {
        "id": 127,
        "iata_code": "GEO"
      },
      {
        "id": 128,
        "iata_code": "BUD"
      },
      {
        "id": 129,
        "iata_code": "HKG"
      },
      {
        "id": 130,
        "iata_code": "DUB"
      },
      {
        "id": 131,
        "iata_code": "AEY"
      },
      {
        "id": 132,
        "iata_code": "KEF"
      },
      {
        "id": 133,
        "iata_code": "RKV"
      },
      {
        "id": 134,
        "iata_code": "AGX"
      },
      {
        "id": 135,
        "iata_code": "AGR"
      },
      {
        "id": 136,
        "iata_code": "AMD"
      },
      {
        "id": 137,
        "iata_code": "IXD"
      },
      {
        "id": 138,
        "iata_code": "ATQ"
      },
      {
        "id": 139,
        "iata_code": "GVA"
      },
      {
        "id": 140,
        "iata_code": "ZRH"
      },
      {
        "id": 141,
        "iata_code": "GOT"
      },
      {
        "id": 142,
        "iata_code": "DUR"
      },
      {
        "id": 143,
        "iata_code": "ELS"
      },
      {
        "id": 144,
        "iata_code": "GRJ"
      },
      {
        "id": 145,
        "iata_code": "HDS"
      },
      {
        "id": 146,
        "iata_code": "MQP"
      },
      {
        "id": 147,
        "iata_code": "JNB"
      },
      {
        "id": 148,
        "iata_code": "PHW"
      },
      {
        "id": 149,
        "iata_code": "PTG"
      },
      {
        "id": 150,
        "iata_code": "PLZ"
      },
      {
        "id": 151,
        "iata_code": "RCB"
      },
      {
        "id": 152,
        "iata_code": "SZK"
      },
      {
        "id": 153,
        "iata_code": "UTT"
      },
      {
        "id": 154,
        "iata_code": "UTN"
      },
      {
        "id": 155,
        "iata_code": "HRE"
      },
      {
        "id": 156,
        "iata_code": "VFA"
      },
      {
        "id": 157,
        "iata_code": "LVI"
      },
      {
        "id": 158,
        "iata_code": "LUN"
      },
      {
        "id": 159,
        "iata_code": "MFU"
      },
      {
        "id": 160,
        "iata_code": "HAN"
      },
      {
        "id": 161,
        "iata_code": "SGN"
      },
      {
        "id": 162,
        "iata_code": "NHA"
      },
      {
        "id": 163,
        "iata_code": "MVD"
      },
      {
        "id": 164,
        "iata_code": "PDP"
      },
      {
        "id": 165,
        "iata_code": "ATL"
      },
      {
        "id": 166,
        "iata_code": "BZN"
      },
      {
        "id": 167,
        "iata_code": "IAH"
      },
      {
        "id": 168,
        "iata_code": "JAC"
      },
      {
        "id": 169,
        "iata_code": "JNU"
      },
      {
        "id": 170,
        "iata_code": "MIA"
      },
      {
        "id": 171,
        "iata_code": "MSP"
      },
      {
        "id": 172,
        "iata_code": "JFK"
      },
      {
        "id": 173,
        "iata_code": "ORD"
      },
      {
        "id": 174,
        "iata_code": "MCO"
      },
      {
        "id": 175,
        "iata_code": "SLC"
      },
      {
        "id": 176,
        "iata_code": "SFO"
      },
      {
        "id": 177,
        "iata_code": "SEA"
      },
      {
        "id": 178,
        "iata_code": "SIT"
      },
      {
        "id": 179,
        "iata_code": "PLS"
      },
      {
        "id": 180,
        "iata_code": "AYT"
      },
      {
        "id": 181,
        "iata_code": "BJV"
      },
      {
        "id": 182,
        "iata_code": "IST"
      },
      {
        "id": 183,
        "iata_code": "DMK"
      },
      {
        "id": 184,
        "iata_code": "BKK"
      },
      {
        "id": 185,
        "iata_code": "CNX"
      },
      {
        "id": 186,
        "iata_code": "CEI"
      },
      {
        "id": 187,
        "iata_code": "USM"
      },
      {
        "id": 188,
        "iata_code": "HKT"
      },
      {
        "id": 189,
        "iata_code": "ARK"
      },
      {
        "id": 190,
        "iata_code": "DAR"
      },
      {
        "id": 191,
        "iata_code": "JRO"
      },
      {
        "id": 192,
        "iata_code": "LKY"
      },
      {
        "id": 193,
        "iata_code": "SEU"
      },
      {
        "id": 194,
        "iata_code": "ZNZ"
      },
      {
        "id": 195,
        "iata_code": "TPE"
      },
      {
        "id": 196,
        "iata_code": "PBM"
      },
      {
        "id": 197,
        "iata_code": "SLU"
      },
      {
        "id": 198,
        "iata_code": "SBH"
      },
      {
        "id": 199,
        "iata_code": "CMB"
      },
      {
        "id": 200,
        "iata_code": "LYR"
      },
      {
        "id": 201,
        "iata_code": "BCN"
      },
      {
        "id": 202,
        "iata_code": "MAD"
      },
      {
        "id": 203,
        "iata_code": "AGP"
      },
      {
        "id": 204,
        "iata_code": "PMI"
      },
      {
        "id": 205,
        "iata_code": "TFS"
      },
      {
        "id": 206,
        "iata_code": "SIN"
      },
      {
        "id": 207,
        "iata_code": "PRL"
      },
      {
        "id": 208,
        "iata_code": "SEZ"
      },
      {
        "id": 209,
        "iata_code": "KGL"
      },
      {
        "id": 210,
        "iata_code": "DYR"
      },
      {
        "id": 211,
        "iata_code": "MMK"
      },
      {
        "id": 212,
        "iata_code": "SVO"
      },
      {
        "id": 213,
        "iata_code": "PKC"
      },
      {
        "id": 214,
        "iata_code": "LED"
      },
      {
        "id": 215,
        "iata_code": "RRG"
      },
      {
        "id": 216,
        "iata_code": "DOH"
      },
      {
        "id": 217,
        "iata_code": "FAO"
      },
      {
        "id": 218,
        "iata_code": "HOR"
      },
      {
        "id": 219,
        "iata_code": "LIS"
      },
      {
        "id": 220,
        "iata_code": "AQP"
      },
      {
        "id": 221,
        "iata_code": "CJA"
      },
      {
        "id": 222,
        "iata_code": "CIX"
      },
      {
        "id": 223,
        "iata_code": "CUZ"
      },
      {
        "id": 224,
        "iata_code": "IQT"
      },
      {
        "id": 225,
        "iata_code": "JUL"
      },
      {
        "id": 226,
        "iata_code": "LIM"
      },
      {
        "id": 227,
        "iata_code": "PEM"
      },
      {
        "id": 228,
        "iata_code": "TPP"
      },
      {
        "id": 229,
        "iata_code": "TRU"
      },
      {
        "id": 230,
        "iata_code": "ASU"
      },
      {
        "id": 231,
        "iata_code": "BOC"
      },
      {
        "id": 232,
        "iata_code": "DAV"
      },
      {
        "id": 233,
        "iata_code": "PTY"
      },
      {
        "id": 234,
        "iata_code": "PAC"
      },
      {
        "id": 235,
        "iata_code": "NBL"
      },
      {
        "id": 236,
        "iata_code": "INN"
      },
      {
        "id": 237,
        "iata_code": "VIE"
      },
      {
        "id": 238,
        "iata_code": "MCT"
      },
      {
        "id": 239,
        "iata_code": "IEV"
      },
      {
        "id": 240,
        "iata_code": "KBP"
      },
      {
        "id": 241,
        "iata_code": "EBB"
      },
      {
        "id": 242,
        "iata_code": "BGO"
      },
      {
        "id": 243,
        "iata_code": "OSL"
      },
      {
        "id": 244,
        "iata_code": "TOS"
      },
      {
        "id": 245,
        "iata_code": "AKL"
      },
      {
        "id": 246,
        "iata_code": "CHC"
      },
      {
        "id": 247,
        "iata_code": "WLG"
      },
      {
        "id": 248,
        "iata_code": "KTM"
      },
      {
        "id": 249,
        "iata_code": "MEY"
      },
      {
        "id": 250,
        "iata_code": "AUA"
      },
      {
        "id": 251,
        "iata_code": "BON"
      },
      {
        "id": 252,
        "iata_code": "CUR"
      },
      {
        "id": 253,
        "iata_code": "SXM"
      },
      {
        "id": 254,
        "iata_code": "EIN"
      },
      {
        "id": 255,
        "iata_code": "MST"
      },
      {
        "id": 256,
        "iata_code": "RTM"
      },
      {
        "id": 257,
        "iata_code": "WDH"
      },
      {
        "id": 258,
        "iata_code": "MQS"
      },
      {
        "id": 259,
        "iata_code": "MPM"
      },
      {
        "id": 260,
        "iata_code": "POL"
      },
      {
        "id": 261,
        "iata_code": "VNX"
      },
      {
        "id": 262,
        "iata_code": "ACA"
      },
      {
        "id": 263,
        "iata_code": "CUN"
      },
      {
        "id": 264,
        "iata_code": "CUU"
      },
      {
        "id": 265,
        "iata_code": "GDL"
      },
      {
        "id": 266,
        "iata_code": "ZIH"
      },
      {
        "id": 267,
        "iata_code": "LAP"
      },
      {
        "id": 268,
        "iata_code": "BJX"
      },
      {
        "id": 269,
        "iata_code": "LMM"
      },
      {
        "id": 270,
        "iata_code": "MEX"
      },
      {
        "id": 271,
        "iata_code": "MID"
      },
      {
        "id": 272,
        "iata_code": "OAX"
      },
      {
        "id": 273,
        "iata_code": "PVR"
      },
      {
        "id": 274,
        "iata_code": "SAN"
      },
      {
        "id": 275,
        "iata_code": "SJD"
      },
      {
        "id": 276,
        "iata_code": "TIJ"
      },
      {
        "id": 277,
        "iata_code": "TGZ"
      },
      {
        "id": 278,
        "iata_code": "VSA"
      },
      {
        "id": 279,
        "iata_code": "MRU"
      },
      {
        "id": 280,
        "iata_code": "CMN"
      },
      {
        "id": 281,
        "iata_code": "RAK"
      },
      {
        "id": 282,
        "iata_code": "KUL"
      },
      {
        "id": 283,
        "iata_code": "MLE"
      },
      {
        "id": 284,
        "iata_code": "LLW"
      },
      {
        "id": 285,
        "iata_code": "TIP"
      },
      {
        "id": 286,
        "iata_code": "RUN"
      },
      {
        "id": 287,
        "iata_code": "ASV"
      },
      {
        "id": 288,
        "iata_code": "NBO"
      },
      {
        "id": 289,
        "iata_code": "KIS"
      },
      {
        "id": 290,
        "iata_code": "LAU"
      },
      {
        "id": 291,
        "iata_code": "MYD"
      },
      {
        "id": 292,
        "iata_code": "MBA"
      },
      {
        "id": 293,
        "iata_code": "NYK"
      },
      {
        "id": 294,
        "iata_code": "UAS"
      },
      {
        "id": 295,
        "iata_code": "WIL"
      },
      {
        "id": 296,
        "iata_code": "AMM"
      },
      {
        "id": 297,
        "iata_code": "TAK"
      },
      {
        "id": 298,
        "iata_code": "HND"
      },
      {
        "id": 299,
        "iata_code": "NRT"
      },
      {
        "id": 300,
        "iata_code": "BRI"
      },
      {
        "id": 301,
        "iata_code": "MXP"
      },
      {
        "id": 302,
        "iata_code": "LIN"
      },
      {
        "id": 303,
        "iata_code": "FCO"
      },
      {
        "id": 304,
        "iata_code": "DPS"
      },
      {
        "id": 305,
        "iata_code": "JKT"
      },
      {
        "id": 306,
        "iata_code": "VNS"
      },
      {
        "id": 307,
        "iata_code": "UDR"
      },
      {
        "id": 308,
        "iata_code": "TRV"
      },
      {
        "id": 309,
        "iata_code": "SLV"
      },
      {
        "id": 310,
        "iata_code": "RPR"
      },
      {
        "id": 311,
        "iata_code": "IXZ"
      },
      {
        "id": 312,
        "iata_code": "NAG"
      },
      {
        "id": 313,
        "iata_code": "MYQ"
      },
      {
        "id": 314,
        "iata_code": "BOM"
      },
      {
        "id": 315,
        "iata_code": "IXE"
      },
      {
        "id": 316,
        "iata_code": "IXM"
      },
      {
        "id": 317,
        "iata_code": "IXL"
      },
      {
        "id": 318,
        "iata_code": "CCJ"
      },
      {
        "id": 319,
        "iata_code": "CCU"
      },
      {
        "id": 320,
        "iata_code": "COK"
      },
      {
        "id": 321,
        "iata_code": "HJR"
      },
      {
        "id": 322,
        "iata_code": "JRH"
      },
      {
        "id": 323,
        "iata_code": "JDH"
      },
      {
        "id": 324,
        "iata_code": "JAI"
      },
      {
        "id": 325,
        "iata_code": "JRL"
      },
      {
        "id": 326,
        "iata_code": "HYD"
      },
      {
        "id": 327,
        "iata_code": "GWL"
      },
      {
        "id": 328,
        "iata_code": "GAU"
      },
      {
        "id": 329,
        "iata_code": "GOI"
      },
      {
        "id": 330,
        "iata_code": "DIU"
      },
      {
        "id": 331,
        "iata_code": "DEL"
      },
      {
        "id": 332,
        "iata_code": "DED"
      },
      {
        "id": 333,
        "iata_code": "CJB"
      },
      {
        "id": 334,
        "iata_code": "MAA"
      },
      {
        "id": 335,
        "iata_code": "IXC"
      },
      {
        "id": 336,
        "iata_code": "BHJ"
      },
      {
        "id": 337,
        "iata_code": "BBI"
      },
      {
        "id": 338,
        "iata_code": "BHO"
      },
      {
        "id": 339,
        "iata_code": "BLR"
      },
      {
        "id": 340,
        "iata_code": "IXB"
      },
      {
        "id": 341,
        "iata_code": "IXU"
      },
      {
        "id": 342,
        "iata_code": "AIT"
      },
      {
        "id": 343,
        "iata_code": "RAR"
      },
      {
        "id": 344,
        "iata_code": "AIU"
      },
      {
        "id": 345,
        "iata_code": "HNL"
      },
      {
        "id": 346,
        "iata_code": "LIH"
      },
      {
        "id": 347,
        "iata_code": "OGG"
      },
      {
        "id": 348,
        "iata_code": "KOA"
      },
      {
        "id": 349,
        "iata_code": "MKK"
      },
      {
        "id": 350,
        "iata_code": "ITO"
      },
      {
        "id": 351,
        "iata_code": "LNY"
      },
      {
        "id": 352,
        "iata_code": "SEL"
      },
      {
        "id": 353,
        "iata_code": "ICN"
      },
      {
        "id": 354,
        "iata_code": "TAH"
      },
      {
        "id": 355,
        "iata_code": "TIH"
      },
      {
        "id": 356,
        "iata_code": "SUV"
      },
      {
        "id": 357,
        "iata_code": "SVU"
      },
      {
        "id": 358,
        "iata_code": "RUR"
      },
      {
        "id": 359,
        "iata_code": "RGI"
      },
      {
        "id": 360,
        "iata_code": "RVV"
      },
      {
        "id": 361,
        "iata_code": "RMT"
      },
      {
        "id": 362,
        "iata_code": "RFP"
      },
      {
        "id": 363,
        "iata_code": "ZQN"
      },
      {
        "id": 364,
        "iata_code": "VLI"
      },
      {
        "id": 365,
        "iata_code": "PPT"
      },
      {
        "id": 366,
        "iata_code": "NHV"
      },
      {
        "id": 367,
        "iata_code": "UVE"
      },
      {
        "id": 368,
        "iata_code": "KIX"
      },
      {
        "id": 369,
        "iata_code": "NOU"
      },
      {
        "id": 370,
        "iata_code": "NUS"
      },
      {
        "id": 371,
        "iata_code": "IUE"
      },
      {
        "id": 372,
        "iata_code": "NSN"
      },
      {
        "id": 373,
        "iata_code": "NPE"
      },
      {
        "id": 374,
        "iata_code": "NAN"
      },
      {
        "id": 375,
        "iata_code": "MOZ"
      },
      {
        "id": 376,
        "iata_code": "MAU"
      },
      {
        "id": 377,
        "iata_code": "MUK"
      },
      {
        "id": 378,
        "iata_code": "MVT"
      },
      {
        "id": 379,
        "iata_code": "TVU"
      },
      {
        "id": 380,
        "iata_code": "XMH"
      },
      {
        "id": 381,
        "iata_code": "LIF"
      },
      {
        "id": 382,
        "iata_code": "LST"
      },
      {
        "id": 383,
        "iata_code": "LBS"
      },
      {
        "id": 384,
        "iata_code": "KNQ"
      },
      {
        "id": 385,
        "iata_code": "KDV"
      },
      {
        "id": 386,
        "iata_code": "ILP"
      },
      {
        "id": 387,
        "iata_code": "HUH"
      },
      {
        "id": 388,
        "iata_code": "HBA"
      },
      {
        "id": 389,
        "iata_code": "AUQ"
      },
      {
        "id": 390,
        "iata_code": "HVB"
      },
      {
        "id": 391,
        "iata_code": "HTI"
      },
      {
        "id": 392,
        "iata_code": "GUM"
      },
      {
        "id": 393,
        "iata_code": "HPA"
      },
      {
        "id": 394,
        "iata_code": "FAV"
      },
      {
        "id": 395,
        "iata_code": "SON"
      },
      {
        "id": 396,
        "iata_code": "DUD"
      },
      {
        "id": 397,
        "iata_code": "DPO"
      },
      {
        "id": 398,
        "iata_code": "DEN"
      },
      {
        "id": 399,
        "iata_code": "CBR"
      },
      {
        "id": 400,
        "iata_code": "BNK"
      },
      {
        "id": 401,
        "iata_code": "BME"
      },
      {
        "id": 402,
        "iata_code": "BNE"
      },
      {
        "id": 403,
        "iata_code": "BOB"
      },
      {
        "id": 404,
        "iata_code": "APW"
      },
      {
        "id": 405,
        "iata_code": "TUO"
      },
      {
        "id": 406,
        "iata_code": "TEU"
      },
      {
        "id": 407,
        "iata_code": "TBU"
      },
      {
        "id": 408,
        "iata_code": "TSV"
      },
      {
        "id": 409,
        "iata_code": "VAV"
      },
      {
        "id": 410,
        "iata_code": "UAP"
      },
      {
        "id": 411,
        "iata_code": "ROK"
      },
      {
        "id": 412,
        "iata_code": "IAD"
      },
      {
        "id": 413,
        "iata_code": "YVR"
      },
      {
        "id": 414,
        "iata_code": "LAX"
      },
      {
        "id": 415,
        "iata_code": "EWR"
      },
      {
        "id": 416,
        "iata_code": "CCK"
      },
      {
        "id": 417,
        "iata_code": "XCH"
      },
      {
        "id": 418,
        "iata_code": "POM"
      },
      {
        "id": 419,
        "iata_code": "RAB"
      },
      {
        "id": 420,
        "iata_code": "KVG"
      },
      {
        "id": 421,
        "iata_code": "TFI"
      },
      {
        "id": 422,
        "iata_code": "HGU"
      },
      {
        "id": 423,
        "iata_code": "YHZ"
      },
      {
        "id": 424,
        "iata_code": "SHA"
      },
      {
        "id": 425,
        "iata_code": "PVG"
      },
      {
        "id": 426,
        "iata_code": "LAS"
      },
      {
        "id": 427,
        "iata_code": "CAN"
      },
      {
        "id": 428,
        "iata_code": "ODR"
      },
      {
        "id": 429,
        "iata_code": "MAG"
      },
      {
        "id": 430,
        "iata_code": "WWK"
      },
      {
        "id": 431,
        "iata_code": "HKN"
      },
      {
        "id": 432,
        "iata_code": "HIR"
      },
      {
        "id": 433,
        "iata_code": "MUA"
      },
      {
        "id": 434,
        "iata_code": "GZO"
      },
      {
        "id": 435,
        "iata_code": "EGM"
      },
      {
        "id": 436,
        "iata_code": "GUR"
      },
      {
        "id": 437,
        "iata_code": "MAJ"
      },
      {
        "id": 438,
        "iata_code": "PPP"
      },
      {
        "id": 439,
        "iata_code": "BLZ"
      },
      {
        "id": 440,
        "iata_code": "INH"
      },
      {
        "id": 441,
        "iata_code": "PHE"
      },
      {
        "id": 442,
        "iata_code": "ROR"
      },
      {
        "id": 443,
        "iata_code": "BOG"
      },
      {
        "id": 444,
        "iata_code": "KGI"
      },
      {
        "id": 445,
        "iata_code": "OOL"
      },
      {
        "id": 446,
        "iata_code": "ANC"
      },
      {
        "id": 447,
        "iata_code": "FUK"
      },
      {
        "id": 448,
        "iata_code": "TNR"
      },
      {
        "id": 449,
        "iata_code": "DIE"
      },
      {
        "id": 450,
        "iata_code": "NOS"
      },
      {
        "id": 451,
        "iata_code": "SMS"
      }
    ];

    var getObjectByValue = function (array, key, value) {
      return array.filter(function (object) {
          return object[key] === value;
      });
    };

    this.months = ['jan', 'feb', 'mrt', 'apr', 'mei', 'juni', 'juli', 'aug', 'sep', 'okt', 'nov', 'dec'];

    let firstLoopExectuion = false;
    for(const segment of this.itinerary.segments) {
      
      for(const flights of segment.flightInfo) {

        let departureInfo = getObjectByValue(this.airports, 'iata_code', flights.departureAirport);
        let arrivalInfo = getObjectByValue(this.airports, 'iata_code', flights.arrivalAirport);

        if(departureInfo[0] !== undefined && arrivalInfo[0] !== undefined) {
          let departureAirport = getObjectByValue(this.airportDescriptions, 'airport_id', departureInfo[0].id);
          let arrivalAirport = getObjectByValue(this.airportDescriptions, 'airport_id', arrivalInfo[0].id);
          if(departureAirport[0] !== undefined && arrivalAirport[0] !== undefined) {
            
            var date = new Date(flights.departureDate);
            if(!firstLoopExectuion) {
              this.departureFlight = {date: date.getDate() + ' ' + this.months[date.getMonth()] + ' ' + date.getFullYear(), airlineCode: flights.airlineCode};
              firstLoopExectuion = true;
            }
            this.arrivalFlight = {date: date.getDate() + ' ' + this.months[date.getMonth()] + ' ' + date.getFullYear(), airlineCode: flights.airlineCode};
            
            var dateString = date.getDate() + '-' + this.months[date.getMonth()];

            let data = {date: dateString, departureAirport: departureAirport[0].description, arrivalAirport: arrivalAirport[0].description, departureTime: flights.departureTime, arrivalTime: flights.arrivalTime, flightNumber: flights.flightNumber, airlineCode: flights.airlineCode};
            this.flights.push(data);

          }

        }

      }

    }
    console.log('flights', this.flights);

  }

}
