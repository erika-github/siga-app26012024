import { Injectable } from "@angular/core";
import swal from "sweetalert2";
import { UpdateTeacherRecordsService } from "../services/updateTeacherRecords.service";
//import { UpdateRecordsService } from "../services/updateRecords.service";
import { Router } from "@angular/router";
import { TeacherDetail } from "../models/teacherDetail";
/*import { Student } from "../models/student";
import { StudentDetail } from "../models/studentDetail";
import { Course } from "../models/course";*/



@Injectable({
  providedIn: 'root'
})
export class updateTeacher {


  constructor(private updateTeacherService: UpdateTeacherRecordsService,
    private router: Router

  ) {

  }


  
    updateTeacher(teacherDetail:TeacherDetail ){

    var spanEmailDoc = document.getElementById('spanCorreoDoc') as HTMLSpanElement;    
    var spanEdadDoc = document.getElementById('spanEdadDoc') as HTMLSpanElement; 
    var numDocDocente= document.getElementById('numDocDocente') as HTMLInputElement;   
    var telefDoc= document.getElementById('telefDoc') as HTMLInputElement;
    var spanPrimerNomb = document.getElementById('primNombDoc') as HTMLSpanElement;
    var spanSegNomb = document.getElementById('spanSegNomDoc') as HTMLSpanElement;
    var spanPrimerApell = document.getElementById('spanPrimApeDoc') as HTMLSpanElement;
    var spanSegApell = document.getElementById('spanSegApeDoc') as HTMLSpanElement;
    var spanPostGradoUno = document.getElementById('spanPostGradoUno') as HTMLSpanElement;
    var spanPostGradoDos = document.getElementById('spanPostGradoDos') as HTMLSpanElement;
    var spanCursoUno = document.getElementById('spanCursoUno') as HTMLSpanElement;
    var spanCursoDos = document.getElementById('spanCursoDos') as HTMLSpanElement;
    var spanCursoTres = document.getElementById('spanCursoTres') as HTMLSpanElement;
    var spanCursoCuatro = document.getElementById('spanCursoCuatro') as HTMLSpanElement;
    var spanCategoriaDocente = document.getElementById('spanCategoriaDocente') as HTMLSpanElement;
    var spanDirDoc = document.getElementById('spanDirDoc') as HTMLSpanElement;      
    var spanAsigEspe= document.getElementById('spanAsigEspe') as HTMLSpanElement;
    var annioServicio = document.getElementById('annioServicio') as HTMLInputElement;
    var annioServicioNum= parseInt(annioServicio.value); 
    var numDocDocenteNum = parseInt(numDocDocente.value);

     
      teacherDetail.condicion = 'EN EJERCICIO';  

      if(teacherDetail.pregrado2=='default') {

          teacherDetail.pregrado2='';
      }

    console.log(' 1).- teacherDetail.tipoDocumento::'+teacherDetail.tipoDocumento);
    console.log(' 2).- teacherDetail.numeroDocumento::'+teacherDetail.numeroDocumento);
    console.log(' 3).- teacherDetail.primerNombre::'+teacherDetail.primerNombre);
    console.log(' 4).- teacherDetail.primerApellido::'+teacherDetail.primerApellido);
    console.log(' 5).- teacherDetail.segundoNombre::'+teacherDetail.segundoNombre);
    console.log(' 6).- teacherDetail.segundoApellido::'+teacherDetail.segundoApellido);
    console.log(' 7).- teacherDetail.sexo::'+teacherDetail.sexo);
    console.log(' 8).- teacherDetail.sexo::'+teacherDetail.estadoCivil);
    console.log(' 9).- teacherDetail.fechaNacimiento::'+teacherDetail.fechaNacimiento);
    console.log(' 10).- teacherDetail.edad::'+teacherDetail.edad);
    console.log(' 11).- teacherDetail.direccion::'+teacherDetail.direccion);
    console.log(' 12).- teacherDetail.codigoOperadoraTelefono::'+teacherDetail.codigoOperadoraTelefono);    
    console.log(' 13).- teacherDetail.telefono::'+teacherDetail.telefono);
    console.log(' 14).- teacherDetail.email::'+teacherDetail.email);
    console.log(' 15).- teacherDetail.fechaIngreso::'+teacherDetail.fechaIngreso);
    console.log(' 16).- teacherDetail.lugarDeNacimiento::'+teacherDetail.lugarDeNacimiento);
    console.log(' 17).- teacherDetail.nacionalidad::'+teacherDetail.nacionalidad);
    console.log(' 18).- teacherDetail.pregrado1::'+teacherDetail.pregrado1);
    console.log(' 19).- teacherDetail.pregrado2::'+teacherDetail.pregrado2);
    console.log(' 20).- teacherDetail.postgrado1::'+teacherDetail.postgrado1);
    console.log(' 21).- teacherDetail.postgrado2::'+teacherDetail.postgrado2);
    console.log(' 22).- teacherDetail.curso1::'+teacherDetail.curso1);
    console.log(' 23).- teacherDetail.curso2::'+teacherDetail.curso2);
    console.log(' 24).- teacherDetail.curso3::'+teacherDetail.curso3);
    console.log(' 25).- teacherDetail.curso4::'+teacherDetail.curso4);
    console.log(' 26).- teacherDetail.tiempoDeServicio::'+teacherDetail.tiempoDeServicio);
    console.log(' 27).- teacherDetail.categoria::'+teacherDetail.categoria);
    console.log(' 28).- teacherDetail.asignaturasEspecializadas::'+teacherDetail.asignaturasEspecializadas);
    console.log(' 29).- teacherDetail.condicion::'+teacherDetail.condicion);
    console.log(' 30).- teacherDetail.graduadoPregrado1::'+teacherDetail.graduadoPregrado1);
    
    

    if (teacherDetail.tipoDocumento !== "default"  &&
    numDocDocenteNum > 0 &&
    numDocDocente.value.length >= 7 && 
    numDocDocente.value.length <= 8  &&    
    teacherDetail.primerNombre.trim() !== "" &&
    teacherDetail.primerApellido.trim() !== "" &&
    teacherDetail.sexo !== "default" &&
    teacherDetail.estadoCivil !=="default" &&
    teacherDetail.fechaNacimiento !== ""   &&   
    teacherDetail.edad !=="N/A" &&    
    teacherDetail.direccion.trim() !== "" &&
    teacherDetail.codigoOperadoraTelefono !== "default" &&      
    telefDoc.value.length == 7 &&
    teacherDetail.email.trim() !== "" &&
    teacherDetail.fechaIngreso !== "" &&      
    teacherDetail.lugarDeNacimiento !== "default" &&
    teacherDetail.nacionalidad !== "" &&
    teacherDetail.graduadoPregrado1 != "" &&
    teacherDetail.pregrado1 !== "default" &&
    teacherDetail.asignaturasEspecializadas!== "" &&
    annioServicioNum >= 0 &&   
    annioServicio.value.length >=1 &&
    annioServicio.value.length <=2 &&
    spanEmailDoc.innerHTML == 'Formato-Correo-OK' &&  
    spanEdadDoc.innerHTML  !='(_X_) La Edad es inválida. Verifique la Fecha de Nacimiento' &&    
    spanPrimerNomb.innerHTML !='Este campo posee caracteres inválidos' &&
    spanSegNomb.innerHTML !='Este campo posee caracteres inválidos' &&
    spanPrimerApell.innerHTML !='Este campo posee caracteres inválidos' &&
    spanSegApell.innerHTML !='Este campo posee caracteres inválidos' &&  
    spanDirDoc.innerHTML !='Este campo posee caracteres inválidos' &&
    spanPostGradoUno.innerHTML != 'Este campo posee caracteres inválidos' &&
    spanPostGradoDos.innerHTML != 'Este campo posee caracteres inválidos' &&
    spanCursoUno.innerHTML != 'Este campo posee caracteres inválidos' &&
    spanCursoDos.innerHTML != 'Este campo posee caracteres inválidos' &&
    spanCursoTres.innerHTML != 'Este campo posee caracteres inválidos' &&
    spanCursoCuatro.innerHTML != 'Este campo posee caracteres inválidos' &&
    spanCategoriaDocente.innerHTML != 'Este campo posee caracteres inválidos' &&
    spanDirDoc.innerHTML!= 'Este campo posee caracteres inválidos' &&
    spanAsigEspe.innerHTML != 'Este campo posee caracteres inválidos'
  
    
) {


   
      this.updateTeacherService.updateTeacher(teacherDetail)

        .subscribe({
          next: (response: any) => {

            if ($.isEmptyObject(response)){           


              (swal as any).fire({       
  
                title: 'Registro de Docente',
                text: 'Este número de cédula, ya se encuentra asignado a otro docente. Favor corregir',
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
  
              this.router.navigate(['/sigaTeacherPage']);
              swal('Registro de Docente', `El Docente se ha creado exitosamente`, 'success');      
              
             
            }          
            
  
            },
  
            error: (error: any) =>{           
  
            }
  
          })

    } else {

      (swal as any).fire({

        title: 'Validación de Campos',
        text: 'Existen campos vacíos y/o inválidos. Favor revisar',
        type: 'error'

      })

        .then((result: { value: any; }) => {
        
          if (result.value) {

            setTimeout(function () {

              window.scrollTo(0, 350)

            }, 300);


          }


        });

    }




  }





}

