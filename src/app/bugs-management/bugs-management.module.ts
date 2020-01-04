import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsManagementComponent } from './bugs-management/bugs-management.component';
import { BugsMaintenanceComponent } from './bugs-maintenance/bugs-maintenance.component';
import { ListComponent } from './bugs-management/list/list.component';
import { MaintainComponent } from './bugs-maintenance/maintain/maintain.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { MatSortModule } from '@angular/material';

const routes: Routes = [
//  { path: 'bugs', component: BugsManagementComponent },
  { path: 'bugs/new', component: BugsMaintenanceComponent }
 ];

@NgModule({
  declarations: [BugsManagementComponent,
                 BugsMaintenanceComponent,
                 ListComponent,
                 MaintainComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    MatSortModule,
    RouterModule.forChild(routes)
  ],
  exports: [BugsManagementComponent,
            BugsMaintenanceComponent,
            MatSortModule,
            FormsModule,
            RouterModule]
})
export class BugsManagementModule { }
