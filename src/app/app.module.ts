import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";

import { VtbComponentsModule } from "@sitespirit/vtb-component-library";

import { ItineraryResolver } from "./resolvers/itinerary.resolver";

import { AppComponent } from "./app.component";

import { MinisiteComponent } from "./pages/minisite/minisite.component";

import { AgmCoreModule } from "@agm/core";
import { HeaderComponent } from "./component/header/header.component";
import { HeroComponent } from "./component/hero/hero.component";
import { FooterComponent } from "./component/footer/footer.component";
import { NavigationComponent } from "./component/navigation/navigation.component";
import { HomeComponent } from "./pages/home/home.component";
import { OverviewComponent } from "./component/home/overview/overview.component";
import { ExtraInfoComponent } from "./component/home/extra-info/extra-info.component";
import { MainModule } from "./pages/main/main.module";
import { MainComponent } from "./pages/main/main.component";
import { FlightsComponent } from './component/home/flights/flights.component';
import { TripDaysComponent } from './component/home/trip-days/trip-days.component';

@NgModule({
  declarations: [
    AppComponent,
    MinisiteComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    NavigationComponent,
    OverviewComponent,
    ExtraInfoComponent,
    HomeComponent,
    MainComponent,
    FlightsComponent,
    TripDaysComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: MinisiteComponent,
        pathMatch: "full",
        resolve: {
          itinerary: ItineraryResolver
        }
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAp2Nko-n3uxEhNnXm1KqyBru2eXR_m1gM"
    }),
    HttpClientModule,
    VtbComponentsModule.forRoot(environment)
  ],
  providers: [ItineraryResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
