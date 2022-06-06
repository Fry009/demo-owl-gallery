import { TestBed } from '@angular/core/testing';

import { OwlServiceService } from './owl-service.service';

describe('OwlServiceService', () => {
  let service: OwlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
