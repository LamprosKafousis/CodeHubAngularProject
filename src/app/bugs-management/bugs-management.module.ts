import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsManagementComponent } from './bugs-management/bugs-management.component';
import { BugsMaintenanceComponent } from './bugs-maintenance/bugs-maintenance.component';
import { SearchComponent } from './bugs-management/search/search.component';
import { ListComponent } from './bugs-management/list/list.component';
import { MaintainComponent } from './bugs-maintenance/maintain/maintain.component';
import { CommentsComponent } from './bugs-maintenance/comments/comments.component';



@NgModule({
  declarations: [BugsManagementComponent, BugsMaintenanceComponent, SearchComponent, ListComponent, MaintainComponent, CommentsComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent]
})
export class BugsManagementModule { }
