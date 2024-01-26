import { Component} from '@angular/core';
import {MenuService} from 'src/app/LandingPage/services/menu.service';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent{

  constructor(private menuService: MenuService) {

    this.menuService.loadScript();

    
  }

    

}
