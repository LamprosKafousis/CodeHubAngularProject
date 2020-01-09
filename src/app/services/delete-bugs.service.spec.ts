import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DeleteBugsService } from './delete-bugs.service';

describe('DeleteBugsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule]
  }));

  it('should be created', () => {
    const service: DeleteBugsService = TestBed.get(DeleteBugsService);
    expect(service).toBeTruthy();
  });
});
