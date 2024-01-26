import { Injectable } from "@angular/core";
import swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
  })
  export class ValidateDateInput {

    valDateInput(inputIng:any, spanIng:any): void {

        //var inputIng = document.getElementById('fechIngAl') as HTMLInputElement;
        //var spanAdmEst = document.getElementById('spanAdmEst') as HTMLSpanElement;
        var fecha: any = new Date(inputIng.value);
        var hoy = new Date();
    
    
        if (fecha > hoy) {
    
          swal('Validación', `La Fecha de ingreso no puede ser mayor a la fecha actual. Favor corregir`, 'error');
          spanIng.style.display = "block";
          spanIng.innerHTML = "El campo Fecha de Ingreso es inválido";
          spanIng.style.color = "red";
          inputIng.style.border = "2px solid red"
    
        } else if (isNaN(fecha)) {
    
          spanIng.style.display = "block";
          spanIng.innerHTML = "Fecha inválida, complete el campo fecha";
          spanIng.style.color = "red";
          inputIng.style.border = "2px solid red"
    
    
        } else {         
    
          spanIng.style.display = "none";
          inputIng.style.border = "1px solid lightGray"
        }
    
    
      }


  }