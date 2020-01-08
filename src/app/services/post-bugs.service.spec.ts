import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { PostBugsService } from './post-bugs.service';



describe('PostBugsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule]
  }));

  it('should be created', () => {
    const service: PostBugsService = TestBed.get(PostBugsService);
    expect(service).toBeTruthy();
  });
});
