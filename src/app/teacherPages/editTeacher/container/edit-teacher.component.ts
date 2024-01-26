import { Component } from '@angular/core';
import { CountryNac } from 'src/app/studentPages/models/countryNac';
import { GetProfessions } from '../../models/getProfessions';
import { TeacherDetail } from '../../models/teacherDetail';
import { faCircleXmark, faEraser, faHouse, faMagnifyingGlass, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { CountryNationalityService } from 'src/app/studentPages/services/countryNationality.service';
import { TeacherDetailService } from '../../services/TeacherDetail.service';
import { ProfessionsService } from '../../services/professions.service';
import { DocType } from 'src/app/studentPages/classes/utils/docType';
import { GetNationality } from 'src/app/studentPages/classes/utils/getNationality';
import { GetAge } from 'src/app/studentPages/classes/utils/getAge';
import { ValidateTeacherFormService } from 'src/app/studentPages/services/validateTeacherFormService';
import { updateTeacher } from '../../classes/updateTeacher';
import { ValidateDateInput } from 'src/app/studentPages/classes/utils/validateDateInput';



@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent {

  countryNac: CountryNac[] = [];

  professions: GetProfessions[] = [];

  teacherDetail: TeacherDetail = new TeacherDetail();


  faHouse = faHouse;
  faCircleXmark = faCircleXmark;
  faEraser = faEraser;
  faRotateLeft = faRotateLeft;
  faMagnifyingGlass = faMagnifyingGlass;

  

  constructor(private activatedRoute: ActivatedRoute,
    private countryNacService: CountryNationalityService,
    private professionsService: ProfessionsService,
    private teacherDetailService: TeacherDetailService,
    private docType: DocType,
    private getNationality: GetNationality,
    private getAge: GetAge,
    private validateTeacherForm: ValidateTeacherFormService,
    private updateTeacher: updateTeacher,
    private validateDateInput: ValidateDateInput) {


  }

  ngOnInit(): void {

    this.getCountryNationality();
    this.getProfessions();
    this.getTeacher();
    this.validateTeacherForm.loadScript()

  }


  getCountryNationality(): void {

    this.countryNacService.getCountryNac().subscribe((countryNac) => this.countryNac = countryNac)

  }


  getProfessions(): void {

    this.professionsService.getProfessions().subscribe((professions) => this.professions = professions)


  }

  teacherDocType(e: any): void {

    var selectLugNac = document.getElementById("lugarNacDoc") as HTMLSelectElement;
    var nacionalidad = document.getElementById("nacionalidad") as HTMLInputElement;
    var spanLugarNac = document.getElementById('spanLugNacDoc') as HTMLSpanElement;
    var spanNac = document.getElementById('spanNacDoc') as HTMLSpanElement;

    const tipo = "STD";

    this.docType.docType(e, selectLugNac, nacionalidad, spanLugarNac, spanNac, tipo, this.teacherDetail);


  }


  getTeacherNationality(e: any): void {

    var docType = document.getElementById('tipoDocDocente') as HTMLSelectElement;
    var nationality = document.getElementById('nacionalidad') as HTMLInputElement;
    var lugarNac = document.getElementById('lugarNacDoc') as HTMLSelectElement;
    var valSpanNac = document.getElementById('spanNacDoc') as HTMLSpanElement;
    var valSpanLugarNac = document.getElementById('spanLugNacDoc') as HTMLSpanElement;

    const tipo = "STD";

    this.getNationality.getNationality(e, this.countryNac, docType, nationality, tipo, lugarNac, valSpanNac, valSpanLugarNac, this.teacherDetail)


  }


  getTeacherAge(): void {

    var fechaNac = document.getElementById('fechNacDoc') as HTMLInputElement;
    var edad: any = document.getElementById('edadDoc') as HTMLInputElement;
    var spanEdad = document.getElementById('spanEdadDoc') as HTMLSpanElement;
    var spanFechaNac = document.getElementById('spanFechNacDoc') as HTMLSpanElement;
    const tipo = "STD";

    this.getAge.calculateAge(fechaNac, edad, spanEdad, spanFechaNac, tipo, this.teacherDetail)

  }



  getTeacher(): void {

    this.activatedRoute.params.subscribe(params => {


      let id = params['id'];


      if (id) {

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


  updTeacher_(): void {

    this.updateTeacher.updateTeacher(this.teacherDetail);


  }

  valDateInput(): void {

    var inputIng = document.getElementById('fechIngDoc') as HTMLInputElement;
    var spanIng = document.getElementById('spanFechaAdmDoc') as HTMLSpanElement;   
  
    this.validateDateInput.valDateInput(inputIng, spanIng);
  
  }



}
