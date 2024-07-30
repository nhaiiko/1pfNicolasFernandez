import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

import { CourseDialogComponent } from './course-dialog/course-dialog.component';

import { CourseSideComponent } from './course-side/course-side.component';
import { SharedModule } from '../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    CoursesComponent,
    CourseDialogComponent,
    CourseSideComponent
  ],
  exports: [CoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    BrowserAnimationsModule
    
    
    
  ]
})
export class CoursesModule { }
