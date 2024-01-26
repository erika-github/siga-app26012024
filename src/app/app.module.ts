import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { MenuService } from './LandingPage/services/menu.service';
import { LoginService } from './LandingPage/services/login.service';
import { FormService } from './LandingPage/services/login-form.service';
import { LayoutsModule } from './share/layouts/layouts.module';
import { SliderService } from './LandingPage/services/slider.service';
import { HomeService } from './homePage/services/home.service';

import { StudentDetailService } from './studentPages/services/studentDetail.service'
import { CountryNationalityService } from './studentPages/services/countryNationality.service';
import { GetCoursesListServices } from './studentPages/services/getCoursesList.services'
import { ValidateRecordFormService } from './studentPages/services/validateRecordFormService';



@NgModule({ 
  
  declarations: [
    AppComponent
    
    
  ],

 
  imports:[
    BrowserModule,
   
    RouterModule.forRoot([

    ],{
      
    scrollPositionRestoration:"enabled",
    anchorScrolling: "enabled",
    scrollOffset: [0, 64]
   
  }),
    LayoutsModule,
    ],
  
  providers: [MenuService,
    LoginService,  SliderService, FormService,
    HomeService, StudentDetailService,
    CountryNationalityService, GetCoursesListServices,
    ValidateRecordFormService
    
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
