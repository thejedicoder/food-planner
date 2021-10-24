import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../models/trip";
import {PlannerService} from "../services/planner.service";

@Component({
  selector: 'app-trip-name-editor',
  templateUrl: './trip-name-editor.component.html',
  styleUrls: ['./trip-name-editor.component.css']
})
export class TripNameEditorComponent implements OnInit {

  @Input() tripItem?: Trip;
  editMode: boolean = false;

  constructor(private plannerService: PlannerService) { }

  ngOnInit(): void {
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  saveTrip(): void {
    if (this.tripItem) {
      if (this.tripItem.id && this.tripItem.id > 0) {
        this.plannerService.updateTrip(this.tripItem).subscribe(() => this.toggleEdit());
      } else {
        this.plannerService.addNewTrip(this.tripItem).subscribe(() => this.toggleEdit());
      }
    }
  }
}
