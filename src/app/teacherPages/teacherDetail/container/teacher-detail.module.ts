import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDetailRoutingModule } from './teacher-detail-routing.module';
import { TeacherDetailComponent } from './teacher-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from  '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';




@NgModule({  
  imports: [
    CommonModule,
    TeacherDetailRoutingModule,    
    FontAwesomeModule,
    DataTablesModule,
    HttpClientModule,  
    NgbModule,
    FormsModule
   
    ],
  declarations: [TeacherDetailComponent]
})
export class TeacherDetailModule { }
