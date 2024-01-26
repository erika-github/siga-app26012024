import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//import { TeacherListComponent } from './teacher-list.component';
import { TeacherDetailComponent } from './teacher-detail.component';



const routes: Routes = [
  { path: '', component: TeacherDetailComponent },
 
];

@NgModule({
 
  imports: [    
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class TeacherDetailRoutingModule { }
