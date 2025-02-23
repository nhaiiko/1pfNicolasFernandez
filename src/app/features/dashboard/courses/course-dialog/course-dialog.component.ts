import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Courses } from '../models';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss'
})
export class CourseDialogComponent {

  courseForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private matDialogRef: MatDialogRef<CourseDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public editingCourse?: Courses
    ){
    this.courseForm = this.fb.group({
      nombre: [null, Validators.required],
      fechaInicio: [null, Validators.required],
      fechaFin: [null, Validators.required]
    })
    console.log('SE ESTA EDITANDO: ', this.editingCourse)
    if(this.editingCourse){
      this.courseForm.patchValue(this.editingCourse)
    }

    
  }

  onSubmit(): void{
    console.log(this.courseForm.value)
    if(this.courseForm.valid){
      this.matDialogRef.close(this.courseForm.value);
    }
    
  }

}
