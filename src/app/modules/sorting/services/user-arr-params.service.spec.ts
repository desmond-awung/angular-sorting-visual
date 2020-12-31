import { TestBed } from '@angular/core/testing';

import { UserArrParamsService } from './user-arr-params.service';

describe('UserArrParamsService', () => {
  let service: UserArrParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserArrParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
