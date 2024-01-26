import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { CreateStudentRoutingModule } from './create-student-routing.module';
//import { CreateStudentComponent } from './create-student.component';

import { CreateTeacherComponent } from './create-teacher.component';
import { CreateTeacherRoutingModule } from './create-teacher-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from  '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({  
  imports: [
    CommonModule,
    CreateTeacherRoutingModule,    
    FontAwesomeModule,
    DataTablesModule,
    HttpClientModule,  
    NgbModule,
    FormsModule
   
    ],
  declarations: [CreateTeacherComponent]
})
export class CreateTeacherModule { }
