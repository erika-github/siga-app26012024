import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailComponent } from './student-detail.component';



const routes: Routes = [
  { path: '', component: StudentDetailComponent },
 
];

@NgModule({
 
  imports: [    
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class StudentDetailRoutingModule { }
