import { Component } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { Courses } from './models';
import { generateID } from '../../../shared/utils';
import { CourseSideComponent } from './course-side/course-side.component';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})


export class CoursesComponent {
  
  isLoading = false;

  displayedColumns: string[] = ['id', 'sede', 'nombre', 'carrera', 'fechaInicio', 'fechaFin', 'acciones'];
  
  dataSource: Courses[] = [
    {id: 'jas132a', sede: 'Arica', nombre: 'Juan Perez Perez', carrera: 'H', fechaInicio: new Date(), fechaFin: new Date()},
    {id: 'jas532a', sede: 'Iquique', nombre: 'Juan Perez Perez', carrera: 'He', fechaInicio: new Date(), fechaFin: new Date()},
    {id: 'jas732a', sede: 'Calama', nombre: 'Juan Perez Perez', carrera: 'Li', fechaInicio: new Date(), fechaFin: new Date()},
    {id: 'jas382a', sede: 'Antofagasta', nombre: 'Juan Perez Perez', carrera: 'Be', fechaInicio: new Date(), fechaFin: new Date()},
    {id: 'jasa34a', sede: 'Copiapo', nombre: 'Juan Perez Perez', carrera: 'B', fechaInicio: new Date(), fechaFin: new Date()},
    {id: 'jas33ba', sede: 'La serena', nombre: 'Juan Perez Perez', carrera: 'C', fechaInicio: new Date(), fechaFin: new Date()},
    {id: 'jas352a', sede: 'Valparaiso', nombre: 'Juan Perez Perez', carrera: 'N', fechaInicio: new Date(), fechaFin: new Date()},
    {id: 'jas372a', sede: 'Renca', nombre: 'Juan Perez Perez', carrera: 'O', fechaInicio: new Date(), fechaFin: new Date()},
    {id: 'jas992a', sede: 'Apoquindo', nombre: 'Juan Perez Perez', carrera: 'F', fechaInicio: new Date(), fechaFin: new Date()},
    {id: 'jasa32a', sede: 'Maipu', nombre: 'Juan Perez Perez', carrera: 'Ne', fechaInicio: new Date(), fechaFin: new Date()},
  ] /* ELEMENT_DATA; */

  nombreCurso = '';

  constructor(private matDialog: MatDialog){}

  openDialog(): void{
    this.matDialog
    .open(CourseDialogComponent)
    .afterClosed()
    .subscribe({
      next: (value)=>{
        console.log('RECIBIMOS EL VALOR : ', value);
        this.nombreCurso = value.nombre;
        value['id'] = generateID(7);
        this.dataSource = [...this.dataSource, value];
      },
    })
  }

  /* openSideNave(): void{
    this.matDialog
    .open(CourseDialogComponent)
    .afterClosed()
    .subscribe({
      next: (value)=>{
        console.log('RECIBIMOS EL VALOR : ', value);
        this.nombreCurso = value.nombre;
        value['id'] = generateID(7);
        this.dataSource = [...this.dataSource, value];
      },
    })
  } */

  editCourse(editingCourse: Courses){
    this.matDialog.open(CourseSideComponent, {
      data: editingCourse,
     // position: { right: '0' },
      //width: '300px', // ajusta según sea necesario
      //height: '100vh', // ajusta según sea necesario
      //panelClass: 'custom-dialog-container' // clase personalizada si deseas aplicar estilos adicionales
    }).afterClosed().subscribe({
      next: (value)=>{
        if(!!value){
          this.dataSource = this.dataSource.map((el)=> el.id === editingCourse.id ? {...value, id: editingCourse.id, sede: editingCourse.sede, carrera : editingCourse.carrera} : el);
        }
      }
    })

  }

  deleteCourseByID(id: string){
    if(confirm('Esta seguro?')){
      this.dataSource = this.dataSource.filter((el) => el.id != id);
    }
    
  }

}
