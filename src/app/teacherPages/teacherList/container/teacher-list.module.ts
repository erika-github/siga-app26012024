import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherListRoutingModule } from './teacher-list-routing.module';
import { TeacherListComponent } from './teacher-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from  '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({  
  imports: [
    CommonModule,
    TeacherListRoutingModule,    
    FontAwesomeModule,
    DataTablesModule,
    HttpClientModule,  
    NgbModule,
   
    ],
  declarations: [TeacherListComponent]
})
export class TeacherListModule { }
