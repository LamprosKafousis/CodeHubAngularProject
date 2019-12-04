import { TestBed } from '@angular/core/testing';

import { GetbugsService } from './getbugs.service';

describe('GetbugsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetbugsService = TestBed.get(GetbugsService);
    expect(service).toBeTruthy();
  });
});
