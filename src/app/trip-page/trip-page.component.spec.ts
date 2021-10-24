import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPageComponent } from './trip-page.component';
import {PlannerService} from "../services/planner.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('TripPageComponent', () => {
  let component: TripPageComponent;
  let fixture: ComponentFixture<TripPageComponent>;
  let plannerServiceSpy: jasmine.SpyObj<PlannerService>;

  beforeEach(async () => {
    const plannerSpy = jasmine.createSpyObj('PlannerService', ['getTripById']);
    await TestBed.configureTestingModule({
      declarations: [ TripPageComponent ],
      providers: [{ provide: PlannerService, useValue: plannerSpy }],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    plannerServiceSpy = TestBed.inject(PlannerService) as jasmine.SpyObj<PlannerService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
