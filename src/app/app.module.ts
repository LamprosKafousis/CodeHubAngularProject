import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugsManagementModule } from './bugs-management/bugs-management.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BugsManagementComponent } from './bugs-management/bugs-management/bugs-management.component';//to delete
import { BugsMaintenanceComponent } from './bugs-management/bugs-maintenance/bugs-maintenance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//to deletecd
import { AngularMaterialModule } from './angular-material.module';

const routes: Routes = [
 { path: '', component: BugsManagementComponent },
 { path: 'bugs/new', component: BugsMaintenanceComponent },
 { path: 'bugs/edit', component: BugsMaintenanceComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BugsManagementModule,
    HttpClientModule,
    AngularMaterialModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule
    // RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
