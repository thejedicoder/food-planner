import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsComponent } from "./trips/trips.component";
import {HomeComponent} from "./home/home.component";
import {TripPageComponent} from "./trip-page/trip-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'trips/:id', component: TripPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
