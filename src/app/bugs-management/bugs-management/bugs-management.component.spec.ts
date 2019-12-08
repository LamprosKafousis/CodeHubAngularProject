import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsManagementComponent } from './bugs-management.component';

describe('BugsManagementComponent', () => {
  let component: BugsManagementComponent;
  let fixture: ComponentFixture<BugsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
