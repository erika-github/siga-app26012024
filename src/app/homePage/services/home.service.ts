import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Params, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  varBool=true
  constructor(private router:Router) { }

  

  public loadScript() {

    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = './assets/js/home.js';
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('body')[0].appendChild(node);  
 
    
  }

 



  
}
