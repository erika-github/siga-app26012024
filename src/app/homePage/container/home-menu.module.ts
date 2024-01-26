import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeMenuRoutingModule } from './home-menu-routing.module';
import { HomeMenuComponent } from './home-menu.component';
import { HomeService } from '../services/home.service';



@NgModule({

  imports: [
    CommonModule,
    FontAwesomeModule,  
    HomeMenuRoutingModule
  ],
  providers: [ 
     HomeService],

  exports:[],
 
  declarations: [HomeMenuComponent ]
})

export class HomeMenuModule { }