import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {PlannerService} from "../services/planner.service";
import {Trip} from "../models/trip";
import { Location } from '@angular/common';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.css']
})
export class TripPageComponent implements OnInit {

  selectedTrip?: Trip;
  showAlert?: boolean;

  constructor(
    private route: ActivatedRoute,
    private plannerService: PlannerService,
    private location: Location) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    let tripId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.plannerService.getTripById(tripId)
      .subscribe(trip => this.selectedTrip = trip);
  }

  saveTrip(): void {
    if (!this.selectedTrip) {
      this.showAlert = true;
    } else {
      if (this.selectedTrip.id > 0) {
        this.plannerService.updateTrip(this.selectedTrip).subscribe(() => this.location.back());
      } else {
        this.plannerService.addNewTrip(this.selectedTrip).subscribe(() => this.location.back());
      }
    }
  }
}
