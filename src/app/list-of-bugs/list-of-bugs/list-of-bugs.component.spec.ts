import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBugsComponent } from './list-of-bugs.component';

describe('ListOfBugsComponent', () => {
  let component: ListOfBugsComponent;
  let fixture: ComponentFixture<ListOfBugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfBugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
