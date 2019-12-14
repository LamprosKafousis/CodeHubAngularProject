import { TestBed } from '@angular/core/testing';

import { GetBugsByIdService } from './get-bugs-by-id.service';

describe('GetBugsByIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBugsByIdService = TestBed.get(GetBugsByIdService);
    expect(service).toBeTruthy();
  });
});
