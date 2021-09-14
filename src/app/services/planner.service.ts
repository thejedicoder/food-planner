import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Trip} from "../models/trip";

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  constructor() { }

  // getTrips(): Observable<Trip[]> {
  //   // const heroes = of(HEROES);
  //   // return heroes;
  // }
}
