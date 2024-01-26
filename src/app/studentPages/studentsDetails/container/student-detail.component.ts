import { Component, OnInit } from '@angular/core';
import { faHouse, faCircleXmark, faEraser, faRotateLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { StudentDetail } from '../../models/studentDetail';
import { ActivatedRoute } from '@angular/router';
import { StudentDetailService } from '../../services/studentDetail.service';
import { CountryNac } from '../../models/countryNac';
import { CountryNationalityService } from '../../services/countryNationality.service';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit{

  countryNac: CountryNac[] = [];

  studentdetail: StudentDetail=new StudentDetail();
  
  faHouse = faHouse;
  faCircleXmark = faCircleXmark;
  faEraser = faEraser;
  faRotateLeft = faRotateLeft;
  faMagnifyingGlass = faMagnifyingGlass

  constructor(private activatedRoute:ActivatedRoute,
    private studenDetailService:StudentDetailService,
    private countryNacService: CountryNationalityService,    ){   
    

}

ngOnInit(): void {

  this.getStudent(); 
  this.getCountryNationality();
  
}


getCountryNationality(): void {

  this.countryNacService.getCountryNac().subscribe((countryNac) => this.countryNac = countryNac)

}



getStudent():void{

  this.activatedRoute.params.subscribe(params=>{
  

    let id=params['id'];

    
    if(id){      
      this.studenDetailService.getStudent(id).subscribe((studentDetail)=>this.studentdetail=studentDetail)  
   }

  })

}

checkBoxDetail(){

  var miCheckbox = document.getElementById('cboxDetail') as HTMLInputElement;
  var bloqueRpr = document.getElementById('bloqueRpr')as HTMLDivElement;
  var bloqueResumenRpr = document.getElementById('bloqueResumenRpr') as HTMLDivElement;

  if(miCheckbox.checked) {

    bloqueRpr.style.display="block";
    bloqueResumenRpr.style.display="none"      

  } else {

    bloqueRpr.style.display="none";
    bloqueResumenRpr.style.display="block"  

  }
}

  

}
