import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentSectionComponent } from './student-list.component';



const routes: Routes = [
  { path: '', component: StudentSectionComponent },
 
];

@NgModule({
 
  imports: [    
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
