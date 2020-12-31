import { TestBed } from '@angular/core/testing';

import { SortTypeService } from './sort-type.service';

describe('SortTypeService', () => {
  let service: SortTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
