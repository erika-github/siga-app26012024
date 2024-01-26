import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeMenuComponent } from './home-menu.component';


const routes: Routes = [
  { path:'', component: HomeMenuComponent },
  
 
];


@NgModule({
  declarations: [ ],
  imports: [
    
    CommonModule,
    [RouterModule.forChild(routes)
    ]
    
  ],
  
  exports: [RouterModule]
})
export class HomeMenuRoutingModule { }

