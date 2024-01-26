import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//import { TeacherListComponent } from './teacher-list.component';
//import { TeacherDetailComponent } from './teacher-detail.component';
import { EditTeacherComponent } from './edit-teacher.component';



const routes: Routes = [
  { path: '', component: EditTeacherComponent },
 
];

@NgModule({
 
  imports: [    
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class EditTeacherRoutingModule { }
