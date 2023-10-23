import { TestBed } from '@angular/core/testing';

import { GetFilterSearchService } from './get-filter-search.service';

describe('GetFilterSearchService', () => {
  let service: GetFilterSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFilterSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
