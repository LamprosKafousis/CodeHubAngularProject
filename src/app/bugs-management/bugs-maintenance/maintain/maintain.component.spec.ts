import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MaintainComponent } from './maintain.component';

import { HttpParams } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';

describe('MaintainComponent', () => {
  let component: MaintainComponent;
  let fixture: ComponentFixture<MaintainComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainComponent ]
    , imports: [ ReactiveFormsModule, RouterTestingModule, HttpClientModule,
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatCardModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatProgressSpinnerModule,
      MatPaginatorModule,
      MatSortModule,

      BrowserAnimationsModule
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

// it("Form is invalid"//
  it('Form is invalid', () => {
    // expect(component.maintainForm.valid).toBeTruthy();
     expect(component.maintainForm.invalid).toBeTruthy();
  });

// it("Form is valid"//

  it('maintainForm is valid', () => {
   component.initializeForm();

    const titleControl = component.maintainForm.get('title');
    const descriptionControl = component.maintainForm.get('description');
    const priorityControl = component.maintainForm.get('priority');
    const reporterControl = component.maintainForm.get('reporter');
    const statusControl = component.maintainForm.get('status');

    titleControl.setValue('rania');
    descriptionControl.setValue('raniatest');
    priorityControl.setValue('1');
 //   reporterControl.setValue('QA');
 //statusControl.setValue('Rejected');
//    statusControl.setValue('');
    expect(component.maintainForm.valid).toBeTruthy();
  });});
