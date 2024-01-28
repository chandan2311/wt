import { TestBed } from '@angular/core/testing';

import { CalserviceService } from './calservice.service';

describe('CalserviceService', () => {
  let service: CalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
