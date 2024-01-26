
import { Component, OnInit } from '@angular/core';
import { faHouse, faCircleXmark, faEraser, faRotateLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { StudentDetail } from 'src/app/studentPages/models/studentDetail';
import { ActivatedRoute } from '@angular/router';
import { StudentDetailService } from 'src/app/studentPages/services/studentDetail.service';
import { CountryNac } from 'src/app/studentPages/models/countryNac';
import { CountryNationalityService } from 'src/app/studentPages/services/countryNationality.service';
import { ProfessionsService } from '../../services/professions.service';
import { GetProfessions } from '../../models/getProfessions';
import { TeacherDetail } from '../../models/teacherDetail';
import { TeacherDetailService } from '../../services/TeacherDetail.service';


@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit{

  countryNac: CountryNac[] = [];

  professions: GetProfessions[] = []; 

  studentdetail: StudentDetail=new StudentDetail();

  teacherDetail: TeacherDetail= new TeacherDetail();

  getProfess: GetProfessions= new GetProfessions();

  getProfess2:GetProfessions= new GetProfessions();

 
  
  faHouse = faHouse;
  faCircleXmark = faCircleXmark;
  faEraser = faEraser;
  faRotateLeft = faRotateLeft;
  faMagnifyingGlass = faMagnifyingGlass;
 

  constructor(private activatedRoute:ActivatedRoute,
    private studenDetailService:StudentDetailService,
    private countryNacService: CountryNationalityService,
    private professionsService: ProfessionsService,
    private teacherDetailService:TeacherDetailService){   
    

}

ngOnInit(): void {

  this.getCountryNationality();
  this.getProfessions();
  this.getTeacher()
  
}


getCountryNationality(): void {

  this.countryNacService.getCountryNac().subscribe((countryNac) => this.countryNac = countryNac)

}


getProfessions(): void {

  this.professionsService.getProfessions().subscribe((professions) => this.professions= professions)

  
}


getTeacher():void{

  this.activatedRoute.params.subscribe(params=>{
  

    let id=params['id'];

    
    if(id){       

      this.teacherDetailService.getTeacher(id)
          .subscribe({
            next: response => {

              this.teacherDetail = response;

              if (this.teacherDetail.pregrado2 == '') {                
                
                this.teacherDetail.pregrado2 = "default"              

            }

            },

            error: error => {


              if (error.status == 404) {


              }

            }


          })
       
   }

  })

}



}







