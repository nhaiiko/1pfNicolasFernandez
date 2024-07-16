import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})


export class CoursesComponent {
  nombreCurso = '';

  constructor(private matDialog: MatDialog){}

  openDialog(): void{
    this.matDialog
    .open(CourseDialogComponent)
    .afterClosed()
    .subscribe({
      next: (value)=>{
        console.log('RECIBIMOS EL VALOR : ', value);
        this.nombreCurso = value.name;
      },
    })
  }

}
