import { Component, OnDestroy, OnInit } from '@angular/core';
import { SliderService } from 'src/app/LandingPage/services/slider.service';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent{

  faCircle = faCircle;

  constructor(private sliderService: SliderService) {

    this.sliderService.loadScript();
    
  }

 
}
