import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { CountryNac } from '../../models/countryNac';
import { CountryNationalityService } from '../../services/countryNationality.service';
import { GetCoursesListServices } from '../../services/getCoursesList.services';
import { Course } from '../../models/course';
import { ValidateRecordFormService } from '../../services/validateRecordFormService';
import { faUserPlus, faHouse, faCircleXmark, faEraser, faRotateLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { DocType } from '../../classes/utils/docType';
import { GetAge } from '../../classes/utils/getAge';
import { GetNationality } from '../../classes/utils/getNationality';
import { ReloadTableService } from '../../services/reloadTable.service';
import { GetRepr } from '../../models/getRepr';
import { Representative } from '../../models/representative';
import { CreateStudent } from '../../classes/createStudent';
import { AssingCoursesSaveRec } from '../../classes/assingCoursesSaveRec';
import { GetRepresentative } from '../../classes/getRepresentative';
import { ValidateDateInput } from '../../classes/utils/validateDateInput';
import { StudentDetail } from '../../models/studentDetail';



@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})


export class CreateStudentComponent implements OnInit {


  student: Student = new Student();

  studentdetail: StudentDetail = new StudentDetail();

  //repre: GetRepr = new GetRepr();

  representative: Representative = new Representative();

  coursesList: Course[] = [];

  courseObj: Course = new Course();

  countryNac: CountryNac[] = [];

  cont: any;

  table: any;    

  selectedLugNacAl = this.studentdetail.lugarDeNacimiento = "default";
  selectedLugNacRp = this.studentdetail.representante.lugarDeNacimiento = "default";

  selectedTipDocAl = this.studentdetail.tipoDocumento = "default";
  selectedTipDocRepr = this.studentdetail.representante.tipoDocumento = "default";

  selectedSexAl = this.studentdetail.sexo = "default";
  selectedSexRpr = this.studentdetail.representante.sexo = "default";

  selectedCivilRpr = this.studentdetail.representante.estadoCivil = "default";

  selectedOperAl = this.studentdetail.codigoOperadoraTelefono = "default";
  selectedOperRepr = this.studentdetail.representante.codigoOperadoraTelefono = "default";

  selectedOperEmpr = this.studentdetail.representante.codigoOperadoraTelefonoEmpresa = "default";

  selectedParentesco = this.studentdetail.parentesco = "default";

  faUserPlus = faUserPlus;
  faHouse = faHouse;
  faCircleXmark = faCircleXmark;
  faEraser = faEraser;
  faRotateLeft = faRotateLeft;
  faMagnifyingGlass = faMagnifyingGlass;


  

  constructor(private countryNacService: CountryNationalityService,
    private getCoursesListServices: GetCoursesListServices,
    private validateForm: ValidateRecordFormService,
    private docType: DocType,
    private getAge: GetAge,
    private getNationality: GetNationality,
    private reloadTableService: ReloadTableService,  
    private createStudent_: CreateStudent,
    private assingCoursesSaveRec: AssingCoursesSaveRec,
    private getRepresentative: GetRepresentative,
    private validateDateInput: ValidateDateInput,
    
  ) {


  }

  ngOnInit() {

    this.getCountryNationality();
    this.getCoursesList();
    this.validateForm.loadScript();    
    
  }




  studentDocType(e: any): void {

    var selectLugNac = document.getElementById("lugarNacAl") as HTMLSelectElement;
    var nacionalidad = document.getElementById("nacionalidad") as HTMLInputElement;
    var spanLugarNac = document.getElementById('spanLugarNacEst') as HTMLSpanElement;
    var spanNac = document.getElementById('spanNacEst') as HTMLSpanElement;

    const tipo = "STD";

    this.docType.docType(e, selectLugNac, nacionalidad, spanLugarNac, spanNac, tipo, this.studentdetail);


  }

  reprDocType(e: any): void {

    var selectLugNac = document.getElementById("lugarNacRepr") as HTMLSelectElement;
    var nacionalidad = document.getElementById("nacionalidadRepr") as HTMLInputElement;
    var spanLugarNac = document.getElementById("spanLugNacRpr") as HTMLSpanElement;
    var spanNac = document.getElementById("spanNacRpr") as HTMLSpanElement;
    const tipo = "RPR";

    this.docType.docType(e, selectLugNac, nacionalidad, spanLugarNac, spanNac, tipo, this.studentdetail);

  }



  getCountryNationality(): void {

    this.countryNacService.getCountryNac().subscribe((countryNac) => this.countryNac = countryNac)

  }

  getStudentAge(): void {

    var fechaNac = document.getElementById('fechNacAl') as HTMLInputElement;
    var edad: any = document.getElementById('edadAl') as HTMLInputElement;
    var spanEdad = document.getElementById('spanEdadEst') as HTMLSpanElement;
    var spanFechaNac = document.getElementById('spanFechNacEst') as HTMLSpanElement;
    const tipo = "STD";

    this.getAge.calculateAge(fechaNac, edad, spanEdad, spanFechaNac, tipo, this.studentdetail)

  }

  getReprAge(): void {


    var fechaNac = document.getElementById('fechNacRepr') as HTMLInputElement;
    var edad: any = document.getElementById('edadRepr') as HTMLInputElement;
    var spanEdad = document.getElementById('spanEdadRpr') as HTMLSpanElement;
    var spanFechaNac = document.getElementById('spanFechNacRpr') as HTMLSpanElement;
    const tipo = "RPR";

    this.getAge.calculateAge(fechaNac, edad, spanEdad, spanFechaNac, tipo, this.studentdetail);


  }

  getStudentNationality(e: any): void {

    var docType = document.getElementById('tipoDocAl') as HTMLSelectElement;
    var nationality = document.getElementById('nacionalidad') as HTMLInputElement;
    var lugarNac = document.getElementById('lugarNacAl') as HTMLSelectElement;
    var valSpanNac = document.getElementById('spanNacEst') as HTMLSpanElement;
    var valSpanLugarNac = document.getElementById('spanLugarNacEst') as HTMLSpanElement;
    const tipo = "STD";

    this.getNationality.getNationality(e, this.countryNac, docType, nationality, tipo, lugarNac, valSpanNac, valSpanLugarNac, this.studentdetail)
    

  }

  getRprNationality(e: any): void {


    var docType = document.getElementById('tipoDocRepr') as HTMLSelectElement;
    var nationality = document.getElementById('nacionalidadRepr') as HTMLInputElement;
    var lugarNac = document.getElementById('lugarNacRepr') as HTMLSelectElement;
    var valSpanNac = document.getElementById('spanNacRpr') as HTMLSpanElement;
    var valSpanLugarNac = document.getElementById('spanLugNacRpr') as HTMLSpanElement;
    const tipo = "RPR"

    this.getNationality.getNationality(e, this.countryNac, docType, nationality, tipo, lugarNac, valSpanNac, valSpanLugarNac, this.studentdetail)

  
  }

  valDateInput(): void {

    var inputIng = document.getElementById('fechIngAl') as HTMLInputElement;
    var spanIng = document.getElementById('spanAdmEst') as HTMLSpanElement;

    this.validateDateInput.valDateInput(inputIng, spanIng);

  }


  assingCourse(e: any): void {

    this.assingCoursesSaveRec.assignCourseRec(e, this.courseObj);

  }


  getCoursesList(): void {

    this.getCoursesListServices.getCoursesList()
      .subscribe({
        next: response => {

          this.coursesList = response;
          setTimeout(() => {

            this.table = $('#datatableexample').DataTable({
              pagingType: 'full_numbers',
              pageLength: 10,
              processing: true,
              lengthMenu: [10, 25, 50],
              language: {
                url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'

              }

            });


          }, 1)

        }, error: error => {

        }


      })

  }


  reloadTable(): void {

    this.reloadTableService.reloadTable(this.courseObj, this.cont)


  }



  createStudent():void {    
    
    this.createStudent_.createStudent(this.student, this.courseObj, this.studentdetail)  
   

  }
  

  getRepr_(): void {


    const tipo: any="CREATE";

    this.getRepresentative.getRepresentative(this.representative, this.studentdetail, tipo);

  }


  validate(e: any) {


    var spanIngresos = document.getElementById('spanIngre') as HTMLSpanElement;
    var inputIngresos = document.getElementById('ingresos') as HTMLInputElement;

    spanIngresos.innerHTML = "El campo Ingresos es obligatorio";
    var signoComma = e.target.value.includes(',');
    var num = Number.parseFloat(e.target.value);
    var inputValue: any;


    if (signoComma) {

      var inp = e.target.value.replace(",", ".");
      num = Number.parseFloat(inp);

    }

    if (!isNaN(num)) {

      var inputV = e.target.value;
      var entero = Math.trunc(num);
      var enteroString = entero.toString();


      if (enteroString.length <= 8) {

        inputValue = e.target.value = num.toFixed(2);
        e.target.value = inputValue.replace(".", ",");


      } else {

        if (enteroString.length == 9) {

          inputValue = e.target.value = num.toFixed(1);
          e.target.value = inputValue.replace(".", ",");

        } else {

          spanIngresos.style.display = "none";
          inputIngresos.style.border = "1px solid #b5b5b5";
          e.target.value = inputV.replace(".", ",");

        }

      }

    }

  }


}






