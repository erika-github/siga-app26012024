import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SectionsComponent } from './sections.component';


const routes: Routes = [
  { path: '', component: SectionsComponent },
 
];

@NgModule({
 
  imports: [    
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
