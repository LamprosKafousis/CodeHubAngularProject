import { TestBed } from '@angular/core/testing';

import { PostBugsService } from './post-bugs.service';

describe('PostBugsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostBugsService = TestBed.get(PostBugsService);
    expect(service).toBeTruthy();
  });
});
