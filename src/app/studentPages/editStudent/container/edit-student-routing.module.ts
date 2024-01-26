import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditStudentComponent } from './edit-student.component';



const routes: Routes = [
  { path: '', component: EditStudentComponent },
 
];

@NgModule({
 
  imports: [    
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class editStudentRoutingModule { }



