import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailRoutingModule } from './student-detail-routing.module';
import { StudentDetailComponent } from './student-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({  
  imports: [
    CommonModule,
    StudentDetailRoutingModule,    
    FontAwesomeModule,
    DataTablesModule,
    NgbModule,
    FormsModule
   
    ],
  declarations: [StudentDetailComponent]
})
export class StudentDetailModule { }
