import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { HomeComponent } from './home/home.component';
import { TripItemComponent } from './trip-item/trip-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    HomeComponent,
    TripItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
