import { TestBed } from '@angular/core/testing';

import { PlannerService } from './planner.service';
import {HttpClient} from "@angular/common/http";

describe('PlannerService', () => {
  let service: PlannerService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ PlannerService, { provide: HttpClient, useClass: MockHttpClient }]
    });
    service = TestBed.inject(PlannerService);
    httpClient = TestBed.inject(HttpClient);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

class MockHttpClient {

}
