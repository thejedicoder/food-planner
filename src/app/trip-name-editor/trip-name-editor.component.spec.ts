import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripNameEditorComponent } from './trip-name-editor.component';
import {PlannerService} from "../services/planner.service";

describe('TripNameEditorComponent', () => {
  let component: TripNameEditorComponent;
  let fixture: ComponentFixture<TripNameEditorComponent>;
  let plannerServiceSpy: jasmine.SpyObj<PlannerService>;

  beforeEach(async () => {
    const plannerSpy = jasmine.createSpyObj('PlannerService', ['updateTrip', 'addNewTrip']);
    await TestBed.configureTestingModule({
      declarations: [ TripNameEditorComponent ],
      providers: [{ provide: PlannerService, useValue: plannerSpy }]
    })
    .compileComponents();

    plannerServiceSpy = TestBed.inject(PlannerService) as jasmine.SpyObj<PlannerService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripNameEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle editMode', () => {
    let editVar = component.editMode;

    component.toggleEdit();

    expect(component.editMode == !editVar);
  })

});
