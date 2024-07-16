import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CoursesModule } from './courses/courses.module';
import {MatListModule} from '@angular/material/list';
import { PipesModule } from './pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';







@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule, 
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CoursesModule,
    MatListModule,
    PipesModule,
    SharedModule
    
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { 
  

}
