import { TestBed } from '@angular/core/testing';

import { PutBugsService } from './put-bugs.service';

describe('PutBugsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PutBugsService = TestBed.get(PutBugsService);
    expect(service).toBeTruthy();
  });
});
