import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsManagementComponent } from './bugs-management/bugs-management.component';
import { BugsMaintenanceComponent } from './bugs-maintenance/bugs-maintenance.component';
import { ListComponent } from './bugs-management/list/list.component';
import { MaintainComponent } from './bugs-maintenance/maintain/maintain.component';
import { CommentsComponent } from './bugs-maintenance/comments/comments.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
//  { path: 'bugs', component: BugsManagementComponent },
  { path: 'bugs/new', component: BugsMaintenanceComponent }
 ];

@NgModule({
  declarations: [BugsManagementComponent,
                 BugsMaintenanceComponent,
                 ListComponent,
                 MaintainComponent,
                 CommentsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [BugsManagementComponent,
            BugsMaintenanceComponent,
            RouterModule]
})
export class BugsManagementModule { }
