import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './main-layout/layouts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainMenuComponent } from '../../LandingPage/components/main-menu/main-menu.component';
import { SliderComponent } from '../../LandingPage/components/slider/slider.component';
import { FooterComponent } from '../../LandingPage/components/footer/footer.component';
import {LayoutRoutingModule} from './layout-routing.module';
import { LoginFormComponent } from '../../LandingPage/auth/loginForm/login-form.component';
import { FormsModule } from '@angular/forms';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { StandardLayoutComponent } from './standard-layout/standard-layout.component';
import { HomeService } from 'src/app/homePage/services/home.service';
import { StandardHeaderComponent } from '../components/standard-header/standard-header.component';
import { StandardFooterComponent } from '../components/standard-footer/standard-footer.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  
  imports: [
    CommonModule,
    FontAwesomeModule,
    LayoutRoutingModule,
     FormsModule,
     HttpClientModule    
  
  ],
  providers: [ 
    HomeService],
  exports: [],
  declarations: [
  LayoutsComponent,
  MainMenuComponent,
  SliderComponent,
  FooterComponent,
  LoginFormComponent,
  HomeLayoutComponent,
  StandardLayoutComponent,  
  StandardHeaderComponent,
  StandardFooterComponent  
  
  ]
})
export class LayoutsModule { }
