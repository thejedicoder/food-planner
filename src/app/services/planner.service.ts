import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Trip} from "../models/trip";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  private tripUrl = 'api/trips';
  private foodUrl = 'api/foods';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  /** GET trips from the server */
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripUrl)
      .pipe(
        tap(_ => console.log('fetched trips')),
        catchError(this.handleError<Trip[]>('getTrips', []))
      );
  }

  getTripById(id: number): Observable<Trip> {
    return this.http.get<Trip>(`${this.tripUrl}/${id}`)
      .pipe(
        tap(_ => console.log('fetched trips')),
        catchError(this.handleError<Trip>(`getHero id=${id}`))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
