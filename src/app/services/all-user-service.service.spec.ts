import { TestBed } from '@angular/core/testing';

import { AllUserServiceService } from './all-user-service.service';

describe('AllUserServiceService', () => {
  let service: AllUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
