import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Trip} from "../models/trip";
import {Food} from "../models/food";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let trips = [
      { id: 11, name: 'Colorado Trail 2021' },
      { id: 12, name: 'Sassafras Gap 2020' },
      { id: 13, name: 'Charlies Bunion 2021' }
    ];
    let foods = [
      { id: 100, name: 'tuna packet', calories: 100, protein: 12},
      { id: 101, name: 'Snickers', calories: 110, protein: 11}
    ]
    return {trips, foods};
  }

  // Overrides the genId method to ensure that a T always has an id.
  // If the array is empty,
  // the method below returns the initial number (11).
  // if the array is not empty, the method below returns the highest
  // id + 1.
  genId<T extends Trip | Food>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }

}
