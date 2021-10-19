import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {PlannerService} from "../services/planner.service";
import {Trip} from "../models/trip";

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.css']
})
export class TripPageComponent implements OnInit {

  selectedTrip?: Trip;

  constructor(private route: ActivatedRoute, private plannerService: PlannerService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    let tripId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.plannerService.getTripById(tripId)
      .subscribe(trip => this.selectedTrip = trip);
  }
}
