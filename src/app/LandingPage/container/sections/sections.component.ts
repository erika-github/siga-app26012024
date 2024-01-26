import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/LandingPage/services/login.service';
import { faRocket, faEye, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent{

  faRocket=faRocket;
  faEye=faEye;
  faHandHoldingHeart=faHandHoldingHeart;
 

  constructor(private loginService: LoginService) {

    this.loginService.loadScript();
    
  }

 

}
