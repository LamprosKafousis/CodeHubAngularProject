import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { GetBugsByIdService } from './get-bugs-by-id.service';

describe('GetBugsByIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule]
  }));

  it('should be created', () => {
    const service: GetBugsByIdService = TestBed.get(GetBugsByIdService);
    expect(service).toBeTruthy();
  });
});
