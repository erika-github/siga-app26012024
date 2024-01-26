import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from "angular-datatables";




@NgModule({  
  imports: [
    CommonModule,
    SectionsRoutingModule,
    FontAwesomeModule,
    DataTablesModule,
  
   
    ],

    
  declarations: [SectionsComponent]
})
export class SectionsModule { }
