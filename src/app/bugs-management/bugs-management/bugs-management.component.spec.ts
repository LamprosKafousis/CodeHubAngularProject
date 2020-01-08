import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { HttpParams } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { BugsManagementComponent } from './bugs-management.component';

// import {
//   MatButtonModule,
//   MatMenuModule,
//   MatToolbarModule,
//   MatIconModule,
//   MatBadgeModule,
//   MatCardModule,
//   MatSidenavModule,
//   MatListModule,
//   MatGridListModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatSelectModule,
//   MatRadioModule,
//   MatDatepickerModule,
//   MatNativeDateModule,
//   MatChipsModule,
//   MatTooltipModule,
//   MatTableModule,
//   MatProgressSpinnerModule,
//   MatPaginatorModule,
//   MatSortModule
// } from '@angular/material';

// describe('BugsManagementComponent', () => {
//   let component: BugsManagementComponent;
//   let fixture: ComponentFixture<BugsManagementComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ BugsManagementComponent ]
//       , imports: [ ReactiveFormsModule, RouterTestingModule, HttpClientModule,
//         MatButtonModule,
//         MatMenuModule,
//         MatToolbarModule,
//         MatIconModule,
//         MatSidenavModule,
//         MatBadgeModule,
//         MatCardModule,
//         MatListModule,
//         MatGridListModule,
//         MatFormFieldModule,
//         MatInputModule,
//         MatSelectModule,
//         MatRadioModule,
//         MatDatepickerModule,
//         MatNativeDateModule,
//         MatChipsModule,
//         MatTooltipModule,
//         MatTableModule,
//         MatProgressSpinnerModule,
//         MatPaginatorModule,
//         MatSortModule
//       ]


//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(BugsManagementComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
