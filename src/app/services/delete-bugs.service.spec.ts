import { TestBed } from '@angular/core/testing';

import { DeleteBugsService } from './delete-bugs.service';

describe('DeleteBugsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteBugsService = TestBed.get(DeleteBugsService);
    expect(service).toBeTruthy();
  });
});
