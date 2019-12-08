import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsMaintenanceComponent } from './bugs-maintenance.component';

describe('BugsMaintenanceComponent', () => {
  let component: BugsMaintenanceComponent;
  let fixture: ComponentFixture<BugsMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
