import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Courses } from '../models';


@Component({
  selector: 'app-course-side',
  templateUrl: './course-side.component.html',
  styleUrl: './course-side.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in')
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class CourseSideComponent {

  courseForm: FormGroup;
  
  constructor(private fb: FormBuilder, 
    private matDialogRef: MatDialogRef<CourseSideComponent>, 
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
