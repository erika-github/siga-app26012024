import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditStudentComponent } from './edit-student.component';
import { editStudentRoutingModule } from './edit-student-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from  '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';




const routes: Routes = [
  { path: '', component: EditStudentComponent },
 
];


@NgModule({  
  imports: [
    CommonModule,
    editStudentRoutingModule,    
    FontAwesomeModule,
    DataTablesModule,
    NgbModule,
    FormsModule,
    HttpClientModule
   
    ],
  declarations: [EditStudentComponent]
})
export class EditStudentModule { }

