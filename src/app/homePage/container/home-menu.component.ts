import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faChevronRight, faPencil, faArrowUpRightFromSquare, faChevronLeft,
  faBars, faUserGroup, faGear, faFolderOpen, faLock, faUser, faEye
} from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../services/home.service';



@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})

export class HomeMenuComponent{


  faChevronRight = faChevronRight;
  faPencil = faPencil;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faChevronLeft = faChevronLeft;
  faBars = faBars;
  faUserGroup = faUserGroup;
  faGear = faGear;
  faFolderOpen = faFolderOpen;
  faLock = faLock;
  faUser = faUser
  mySubscription: any;
  subscription: any;
  faEye = faEye;


  constructor(private homeService: HomeService) {

    this.homeService.loadScript();

  }
 

}


