import { Router } from "@angular/router";
import { SaveRecordsService } from "../services/saveRecords.service";
import { Injectable, OnInit} from "@angular/core";
import { Course } from "../models/course";
import { Student } from "../models/student";
import swal from "sweetalert2";
import { StudentDetail } from "../models/studentDetail";



@Injectable({
    providedIn: 'root'
  })
  export class CreateStudent {  

    constructor(private saveRecordsService:SaveRecordsService,
    private router: Router ){

    }  

    
   

    createStudent(student:Student, courseObj:Course, studentDetail:StudentDetail){  
      
    student.cursoAnnio = courseObj.annio;
    console.log('42).-student.cursoAnnio:::'+student.cursoAnnio);

    student.cursoSeccion = courseObj.seccion;
    console.log('43).-student.cursoSeccion:::'+student.cursoSeccion);

    student.cursoPeriodoAcademico = courseObj.periodoAcademico;
    console.log('44).- student.cursoPeriodoAcademico:::'+ student.cursoPeriodoAcademico);

    student.cursoTurno = courseObj.turno;
    console.log('45).- student.cursoTurno:::'+ student.cursoTurno);

    student.cursoNivel = courseObj.nivel;
    console.log('46).-student.cursoNivel:::'+student.cursoNivel);

    student.condicion = "REGULAR";
    console.log('47).-student.condicion:::'+student.condicion);

    

    var spanEmailAlumn = document.getElementById('spanCorreoEst') as HTMLSpanElement;
    var spanEmailRpr = document.getElementById('spanCorreoRpr') as HTMLSpanElement;
    
    var spanEdadEst = document.getElementById('spanEdadEst') as HTMLSpanElement;
    var spanEdadRpr = document.getElementById('spanEdadRpr') as HTMLSpanElement; 

    var numDocAl= document.getElementById('numDocAl') as HTMLInputElement;
    var numDocRpr= document.getElementById('numDocRepr') as HTMLInputElement;
    var numTelfAl= document.getElementById('textoTlfPpalAl') as HTMLInputElement;
    var numTelRpr= document.getElementById('textoTlfPpalRpr') as HTMLInputElement;
    var numTelEmpr= document.getElementById('textoTlfEmprRpr') as HTMLInputElement;

    var spanPrimerNomb = document.getElementById('spanPrimNomEst') as HTMLSpanElement;
    var spanSegNomb = document.getElementById('spanSegNomEst') as HTMLSpanElement;
    var spanPrimerApell = document.getElementById('spanPrimApeEst') as HTMLSpanElement;
    var spanSegApell = document.getElementById('spanSegApellEst') as HTMLSpanElement;

    var spanPrimerNombRpr = document.getElementById('spanPrimNomRpr') as HTMLSpanElement;
    var spanSegNombRpr = document.getElementById('spanSegNomRpr') as HTMLSpanElement;
    var spanPrimerApellRpr = document.getElementById('spanPrimApeRpr') as HTMLSpanElement;
    var spanSegApellRpr = document.getElementById('spanSegApeRpr') as HTMLSpanElement;

    var spanCurso = document.getElementById('spanCurso') as HTMLSpanElement;
    var tableResponsive = document.getElementsByClassName('table-responsive')[0] as HTMLUnknownElement;
    var divCourse = document.getElementById('divCourse') as HTMLDivElement;
    var spanDirEst = document.getElementById('spanDirEst') as HTMLSpanElement;
    var spanDirRpr = document.getElementById('spanDirRpr') as HTMLSpanElement;
    var spanDirEmprRpr = document.getElementById('spanDirEmprRpr') as HTMLSpanElement;

    var spanProfesion = document.getElementById('spanProfesion') as HTMLSpanElement;
    var spanOcup = document.getElementById('spanOcup') as HTMLSpanElement;
    var spanNomEmpr = document.getElementById('spanNomEmpr') as HTMLSpanElement;
    var spanIngresos= document.getElementById('spanIngre') as HTMLSpanElement;

    var ingresos = document.getElementById('ingresos') as HTMLInputElement;


    if (courseObj.id === "") {

      spanCurso.style.display = "block";
      spanCurso.style.color = "red";       
      divCourse.style.border="2px solid red"

    } else {      
      spanCurso.style.display = "none";   
     divCourse.style.border="1px solid lightGray"

    }

    
    student.primerNombre = studentDetail.primerNombre.trim();
    console.log('1).studentDetail.primerNombre:::'+studentDetail.primerNombre);

    student.primerApellido = studentDetail.primerApellido.trim();
    console.log('2)._studentDetail.primerApellido:::'+studentDetail.primerApellido);

    student.segundoNombre = studentDetail.segundoNombre.trim();
    console.log('3).-studentDetail.segundoNombre:::'+studentDetail.segundoNombre);

    student.segundoApellido = studentDetail.segundoApellido.trim();
    console.log('4).-studentDetail.segundoApellido:::'+studentDetail.segundoApellido);

    student.tipoDocumento = studentDetail.tipoDocumento;
    console.log('5).-studentDetail.tipoDocumento:::'+studentDetail.tipoDocumento);

    student.numeroDocumento = studentDetail.numeroDocumento;
    console.log('6).-studentDetail.numeroDocumento:::'+studentDetail.numeroDocumento);

    student.fechaNacimiento = studentDetail.fechaNacimiento;
    console.log('7).-studentDetail.fechaNacimiento:::'+studentDetail.fechaNacimiento);

    student.sexo = studentDetail.sexo;
    console.log('8).-studentDetail.sexo:::'+studentDetail.sexo);

    student.fechaIngreso = studentDetail.fechaIngreso;
    console.log('9).-studentDetail.fechaIngreso:::'+studentDetail.fechaIngreso);

    student.codigoOperadoraTelefono = studentDetail.codigoOperadoraTelefono;
    console.log('10).-studentDetail.codigoOperadoraTelefono:::'+studentDetail.codigoOperadoraTelefono);

    student.telefono = studentDetail.telefono;
    console.log('11).-studentDetail.telefono:::'+studentDetail.telefono);

    student.lugarDeNacimiento = studentDetail.lugarDeNacimiento;
    console.log('12).-studentDetail.lugarDeNacimiento:::'+studentDetail.lugarDeNacimiento);

    student.nacionalidad = studentDetail.nacionalidad;
    console.log('13).-studentDetail.nacionalidad:::'+studentDetail.nacionalidad);

    student.direccion = studentDetail.direccion.trim();
    console.log('14).-studentDetail.direccion:::'+studentDetail.direccion);

    student.email = studentDetail.email.trim();
    console.log('15).-studentDetail.email:::'+studentDetail.email);

    student.edad = studentDetail.edad;   
    console.log('16).-studentDetail.edad:::'+studentDetail.edad);

    student.representantePrimerNombre = studentDetail.representante.primerNombre.trim();
    console.log('17).-studentDetail.representante.primerNombre:::'+studentDetail.representante.primerNombre);

    student.representantePrimerApellido = studentDetail.representante.primerApellido.trim();
    console.log('18).-studentDetail.representante.primerApellido:::'+studentDetail.representante.primerApellido);

    student.representanteSegundoNombre = studentDetail.representante.segundoNombre.trim();
    console.log('19).-studentDetail.representante.segundoNombre:::'+studentDetail.representante.segundoNombre);

    student.representanteSegundoApellido = studentDetail.representante.segundoApellido.trim();
    console.log('20).-studentDetail.representante.segundoApellido:::'+studentDetail.representante.segundoApellido);

    student.representanteTipoDocumento = studentDetail.representante.tipoDocumento;
    console.log('21).-studentDetail.representante.tipoDocumento:::'+studentDetail.representante.tipoDocumento);

    student.representanteNumeroDocumento = studentDetail.representante.numeroDocumento;
    console.log('22).-studentDetail.representante.numeroDocumento:::'+studentDetail.representante.numeroDocumento);

    student.representanteEdad = studentDetail.representante.edad;    
    console.log('23).-studentDetail.representante.edad:::'+studentDetail.representante.edad);

    student.representanteSexo = studentDetail.representante.sexo;
    console.log('24).-studentDetail.representante.sexo:::'+studentDetail.representante.sexo);

    student.representanteEstadoCivil = studentDetail.representante.estadoCivil;
    console.log('25).-studentDetail.representante.estadoCivil:::'+studentDetail.representante.estadoCivil);

    student.representanteCodigoOperadoraTelefono = studentDetail.representante.codigoOperadoraTelefono;
    console.log('26).-studentDetail.representante.codigoOperadoraTelefono:::'+studentDetail.representante.codigoOperadoraTelefono);

    student.representanteTelefono = studentDetail.representante.telefono;
    console.log('27).-studentDetail.representante.telefono:::'+studentDetail.representante.telefono);

    student.representanteCodigoOperadoraTelefonoEmpresa = studentDetail.representante.codigoOperadoraTelefonoEmpresa;
    console.log('28).-studentDetail.representante.codigoOperadoraTelefonoEmpresa:::'+studentDetail.representante.codigoOperadoraTelefonoEmpresa);

    student.representanteTelefonoEmpresa = studentDetail.representante.telefonoEmpresa;
    console.log('29).studentDetail.representante.telefonoEmpresa:::'+studentDetail.representante.telefonoEmpresa);

    student.representanteFechaNacimieno = studentDetail.representante.fechaNacimieno;
    console.log('30).-studentDetail.representante.fechaNacimieno:::'+studentDetail.representante.fechaNacimieno);

    student.representanteLugarDeNacimiento = studentDetail.representante.lugarDeNacimiento;
    console.log('31).-studentDetail.representante.lugarDeNacimiento:::'+studentDetail.representante.lugarDeNacimiento);

    student.representanteNacionalidad = studentDetail.representante.nacionalidad;
    console.log('32).-studentDetail.representante.nacionalidad:::'+studentDetail.representante.nacionalidad);    

    console.log('Ingreso Mensual Aproximado:::'+ingresos.value);
    student.representanteIngresoMensualAproximado = ingresos.value;

    student.representanteDireccion = studentDetail.representante.direccion.trim();
    console.log('34).-studentDetail.representante.direccion:::'+studentDetail.representante.direccion);

    student.representanteEmpresaDondeTrabaja = studentDetail.representante.empresaDondeTrabaja.trim();
    console.log('35).-studentDetail.representante.empresaDondeTrabaja:::'+studentDetail.representante.empresaDondeTrabaja);

    student.representanteDireccionLaboral = studentDetail.representante.direccionLaboral.trim();
    console.log('36).-studentDetail.representante.direccionLaboral:::'+studentDetail.representante.direccionLaboral);

    student.representanteEmail = studentDetail.representante.email.trim();
    console.log('37).-studentDetail.representante.email:::'+studentDetail.representante.email);

    student.representanteProfesion = studentDetail.representante.profesion.trim();
    console.log('38).-studentDetail.representante.profesion:::'+studentDetail.representante.profesion);

    student.representanteOcupacion = studentDetail.representante.ocupacion.trim();
    console.log('39).-studentDetail.representante.ocupacion:::'+studentDetail.representante.ocupacion);

    student.parentesco = studentDetail.parentesco;
    console.log('40).-studentDetail.parentesco::'+studentDetail.parentesco);

    student.representanteActivo = "true";
    console.log('41).-student.representanteActivo:::'+student.representanteActivo);  
    
       
    
    if (studentDetail.tipoDocumento !== "default"  &&
      numDocAl.value.length == 8 &&
      studentDetail.primerNombre.trim() !== "" &&
      studentDetail.primerApellido.trim() !== "" &&
      studentDetail.sexo !== "default" &&
      studentDetail.fechaNacimiento !== ""   &&   
      studentDetail.edad !=="N/A" &&    
      studentDetail.direccion.trim() !== "" &&
      studentDetail.codigoOperadoraTelefono !== "default" &&      
      numTelfAl.value.length == 7 &&
      studentDetail.email.trim() !== "" &&
      studentDetail.fechaIngreso !== "" &&      
      studentDetail.lugarDeNacimiento !== "default" &&
      studentDetail.nacionalidad !== "" &&
      studentDetail.representante.tipoDocumento !== "default" &&      
      numDocRpr.value.length == 8 &&
      studentDetail.representante.primerNombre !== "" &&
      studentDetail.representante.primerApellido !== "" &&
      studentDetail.representante.sexo !== "default" &&
      studentDetail.representante.lugarDeNacimiento !== "default" &&
      studentDetail.representante.nacionalidad !== "" &&
      studentDetail.representante.ingresoMensualAproximado !== null &&
      studentDetail.representante.fechaNacimieno !== "" &&     
      studentDetail.representante.edad !=="N/A" &&  
      studentDetail.representante.estadoCivil !== "default" &&
      studentDetail.representante.direccion !== "" &&
      studentDetail.representante.empresaDondeTrabaja !== "" &&
      studentDetail.representante.direccionLaboral !== "" &&
      studentDetail.representante.codigoOperadoraTelefono !== "default" &&       
      numTelRpr.value.length == 7 &&   
      studentDetail.representante.codigoOperadoraTelefonoEmpresa !== "default" &&      
      numTelEmpr.value.length == 7 &&
      studentDetail.representante.email !== "" &&
      studentDetail.representante.profesion !== "" &&
      studentDetail.representante.ocupacion !== "" &&
      studentDetail.parentesco !== "default" &&
      courseObj.id !== "" &&
      spanEmailAlumn.innerHTML == 'Formato-Correo-OK' &&
      spanEmailRpr.innerHTML == 'Formato-Correo-OK' &&
      spanEdadEst.innerHTML  !='(_X_) La Edad es inválida. Verifique la Fecha de Nacimiento' &&
      spanEdadRpr.innerHTML  !='(_X_) La Edad es inválida. Verifique la Fecha de Nacimiento' &&
      spanPrimerNomb.innerHTML !='Este campo posee caracteres inválidos' &&
      spanSegNomb.innerHTML !='Este campo posee caracteres inválidos' &&
      spanPrimerApell.innerHTML !='Este campo posee caracteres inválidos' &&
      spanSegApell.innerHTML !='Este campo posee caracteres inválidos' &&
      spanPrimerNombRpr.innerHTML !='Este campo posee caracteres inválidos' &&
      spanSegNombRpr.innerHTML !='Este campo posee caracteres inválidos' &&
      spanPrimerApellRpr.innerHTML !='Este campo posee caracteres inválidos' &&
      spanSegApellRpr.innerHTML !='Este campo posee caracteres inválidos' &&
      spanDirEst.innerHTML !='Este campo posee caracteres inválidos' &&
      spanDirRpr.innerHTML !='Este campo posee caracteres inválidos' &&
      spanDirEmprRpr.innerHTML !='Este campo posee caracteres inválidos' &&
      spanProfesion.innerHTML != 'Este campo posee caracteres inválidos' &&
      spanOcup.innerHTML != 'Este campo posee caracteres inválidos' &&
      spanNomEmpr.innerHTML != 'Este campo posee caracteres inválidos' &&
      spanIngresos.innerHTML != 'El campo ingresos mensuales es inválido. Sólo puede admitir números'

    ) {
     
      this.saveRecordsService.saveStudent(student)

        .subscribe({
          next: response =>{  
            

          if ($.isEmptyObject(response)){                       


            (swal as any).fire({       

              title: 'Registro de Estudiante',
              text: 'Este número de cédula, ya se encuentra asignado a otro estudiante. Favor corregir',
              type: 'error'   
           
          })

          .then((result: { value: any; }) => {

            if (result.value) {        
    
              setTimeout(function(){
          
                window.scrollTo(0,350)
          
            }, 300);
            
          
            }

          })
          

          }else{

            this.router.navigate(['/sigaStudentPage']);
            swal('Registro de Estudiante', `El estudiante se ha creado exitosamente`, 'success');      
            
           
          }          
          

          },

          error: error =>{           

          }

        })

       
        

    } else {

      /////// Ejemplo de como tambien se puede usar SweetAlert2 /////

      /*swal('Validación de Campos', `Existen campos vacíos y/o inválidos. Favor revisar`, 'error');*/

      (swal as any).fire({       

        title: 'Validación de Campos',
        text: 'Existen campos vacíos y/o inválidos. Favor revisar',
        type: 'error'   
     
    })
  
    .then((result: { value: any; }) => {
    
      if (result.value) {
        
    
        setTimeout(function(){
    
          window.scrollTo(0,350)
    
      }, 300);
      
    
      }
    
          
    });
    

    }

       

    }

    
    

  }