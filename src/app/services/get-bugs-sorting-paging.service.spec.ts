import { TestBed } from '@angular/core/testing';

import { GetBugsSortingPagingService } from './get-bugs-sorting-paging.service';

describe('GetBugsSortingPagingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBugsSortingPagingService = TestBed.get(GetBugsSortingPagingService);
    expect(service).toBeTruthy();
  });
});
