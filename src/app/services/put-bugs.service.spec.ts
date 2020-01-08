import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { PutBugsService } from './put-bugs.service';

describe('PutBugsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule]
  }));

  it('should be created', () => {
    const service: PutBugsService = TestBed.get(PutBugsService);
    expect(service).toBeTruthy();
  });
});
