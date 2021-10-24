import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsComponent } from './trips.component';
import {PlannerService} from "../services/planner.service";
import {Observable, of} from "rxjs";

describe('TripsComponent', () => {
  let component: TripsComponent;
  let fixture: ComponentFixture<TripsComponent>;
  let plannerServiceSpy: jasmine.SpyObj<PlannerService>;

  beforeEach(async () => {
    const plannerSpy = jasmine.createSpyObj('PlannerService', ['getTrips']);

    await TestBed.configureTestingModule({
      declarations: [ TripsComponent ],
      providers: [{ provide: PlannerService, useValue: plannerSpy }]
    })
    .compileComponents();

    plannerServiceSpy = TestBed.inject(PlannerService) as jasmine.SpyObj<PlannerService>;
    plannerServiceSpy.getTrips.and.returnValue(of([]));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
//    spyOn(plannerServiceSpy, 'getTrips').and.returnValue({ subscribe: () => [] });
    expect(component).toBeTruthy();
  });
});
