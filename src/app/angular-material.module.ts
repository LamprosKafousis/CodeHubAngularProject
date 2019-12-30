import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
   MatPaginatorModule
} from '@angular/material';

@NgModule({
   imports: [
      CommonModule,
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
      MatPaginatorModule
   ],
   exports: [
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatCardModule,
      MatListModule,
      MatGridListModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatProgressSpinnerModule,
      MatPaginatorModule
   ],
   providers: [
      MatDatepickerModule,
   ]
})

export class AngularMaterialModule { }
