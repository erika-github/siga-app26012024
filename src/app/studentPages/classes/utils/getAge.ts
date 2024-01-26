import { Injectable } from "@angular/core";
import swal from 'sweetalert2';
import { CalculateAge } from "./calculateAge";
import { StudentDetail } from "../../models/studentDetail";

@Injectable({
  providedIn: 'root'
})
export class GetAge {

  constructor(private calculate: CalculateAge) {


  }

  public calculateAge(fechaNac: any, edad: any, spanEdad: any, spanFechaNac: any, tipo: any, object:any) {

    var hoy = new Date();     
    var fecha:any = new Date(fechaNac.value);
    var calculoEdad = this.calculate.calculateAge(fechaNac);    
    edad.value = calculoEdad;
    

    if (tipo == "STD") {
      
      object.edad= calculoEdad;

    } else {
    
      object.representante.edad=calculoEdad;

    }
   

    if ((calculoEdad < 0 || calculoEdad == 0) && fecha > hoy) {   
     

      setTimeout(() => {

        swal('Validación', `El campo Fecha de nacimiento no puede contener una fecha a futuro. Favor corregir`, 'error')
        spanEdad.style.display = "block";
        edad.style.border = "2px solid red";
        spanEdad.innerHTML = "(_X_) La Edad es inválida. Verifique la Fecha de Nacimiento";
        spanEdad.style.color = "red";
        edad.value = "N/A";

        if (tipo == "STD") {
         
          object.edad ="N/A"

        } else {
       
          object.representante.edad="N/A"

        }

        spanFechaNac.style.display = "block";
        spanFechaNac.innerHTML = "El campo Fecha de nacimiento es inválido";
        spanFechaNac.style.color = "red";
        fechaNac.style.border = "2px solid red";

      }, 300)
    }


    else if (calculoEdad > 0) {

      spanEdad.style.display = "block";
      spanEdad.style.color = "orange";
      spanFechaNac.style.display = "none";
      edad.style.border = "1px solid lightGray";
      spanEdad.innerHTML = "|_!_| La Edad se ha calculado automáticamente. Sino es correcta, cambie la Fecha de nacimiento";
      fechaNac.style.border = "1px solid lightGray"
    }

    else if (calculoEdad == 0) {

      swal('Validación', `La Edad no puede ser igual a cero. Favor corregir la fecha de nacimiento`, 'error')
      spanEdad.style.display = "block";
      edad.style.border = "2px solid red";
      spanEdad.innerHTML = "(_X_) La Edad es inválida. Verifique la Fecha de Nacimiento";
      spanEdad.style.color = "red";
      spanFechaNac.style.display = "block";      
      spanFechaNac.innerHTML ="El campo Fecha de nacimiento es inválido";
      spanFechaNac.style.color = "red";
      fechaNac.style.border = "2px solid red";
    }

    else if (isNaN(calculoEdad)) {

      spanEdad.style.display = "block";
      spanEdad.style.color = "red";
      edad.style.border = "2px solid red";
      spanEdad.innerHTML = "(_X_) La Edad es inválida. Verifique la Fecha de Nacimiento"
      edad.value = "N/A";

      if (tipo == "STD") {
      
        object.edad= "N/A";

      } else {
       
        object.representante.edad = "N/A";

      }

      spanFechaNac.style.display = "block";
      spanFechaNac.innerHTML = "Fecha inválida, complete el campo fecha";
      spanFechaNac.style.color = "red";
      fechaNac.style.border = "2px solid red";
    }

   

  }

}
