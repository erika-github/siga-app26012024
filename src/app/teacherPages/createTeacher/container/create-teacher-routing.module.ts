import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTeacherComponent } from './create-teacher.component';



const routes: Routes = [
  { path: '', component: CreateTeacherComponent },
 
];

@NgModule({
 
  imports: [    
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class CreateTeacherRoutingModule { }
