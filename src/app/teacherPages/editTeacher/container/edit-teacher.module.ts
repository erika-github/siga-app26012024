import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*import { TeacherDetailRoutingModule } from './teacher-detail-routing.module';
import { TeacherDetailComponent } from './teacher-detail.component';*/;
import { EditTeacherComponent } from './edit-teacher.component';
import { EditTeacherRoutingModule } from './edit-teacher-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from  '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';




@NgModule({  
  imports: [
    CommonModule,
    EditTeacherRoutingModule,    
    FontAwesomeModule,
    DataTablesModule,
    HttpClientModule,  
    NgbModule,
    FormsModule
   
    ],
  declarations: [EditTeacherComponent]
})
export class EditTeacherModule { }
