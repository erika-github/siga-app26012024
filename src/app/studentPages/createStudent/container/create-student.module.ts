import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateStudentRoutingModule } from './create-student-routing.module';
import { CreateStudentComponent } from './create-student.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from  '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({  
  imports: [
    CommonModule,
    CreateStudentRoutingModule,    
    FontAwesomeModule,
    DataTablesModule,
    HttpClientModule,  
    NgbModule,
    FormsModule
   
    ],
  declarations: [CreateStudentComponent]
})
export class CreateStudentModule { }
