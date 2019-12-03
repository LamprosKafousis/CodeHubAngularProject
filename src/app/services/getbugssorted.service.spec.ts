import { TestBed } from '@angular/core/testing';

import { GetbugssortedService } from './getbugssorted.service';

describe('GetbugssortedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetbugssortedService = TestBed.get(GetbugssortedService);
    expect(service).toBeTruthy();
  });
});
