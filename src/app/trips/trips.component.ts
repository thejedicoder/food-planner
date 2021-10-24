import { Component, OnInit } from '@angular/core';
import {PlannerService} from "../services/planner.service";
import {Trip} from "../models/trip";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  tripList: Trip[] = [];
  selectedTrip?: Trip;
  editTrip: boolean = true;

  constructor(private plannerService: PlannerService) { }

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this.plannerService.getTrips()
      .subscribe(trips => this.tripList = trips);
  }

  onSelect(trip: Trip) {
    this.selectedTrip = trip;
  }
}
