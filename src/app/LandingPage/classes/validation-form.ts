import { Injectable } from '@angular/core';
import { User } from '../models/user/user';

@Injectable({
    providedIn: 'root'
})
export class ValidationForm {


    constructor() {

    }

    public formValidation(obj:User, us: String, passw: String): void {

        var bUser = false;
        var bPassw = false;
        var userErr = document.querySelector('#errorUsuario') as HTMLSpanElement;
        var passErr = document.querySelector('#errorPassword') as HTMLSpanElement;    
        var inputPass= document.querySelector('#password') as HTMLInputElement;
        var inputUser= document.querySelector('#user') as HTMLInputElement;
        var cerrar=document.querySelector('#cerrar') as HTMLParagraphElement;
        var bod = document.querySelector('body') as HTMLBodyElement;
        
        bod.style.background="none";

      
        
        if (us.trim().length == 0) {

           
            userErr.innerHTML = "Usuario inválido";
            userErr.style.color = "red";
            userErr.style.display = "block";
            passErr.style.display='none';
            bUser = false;            
            inputUser.value="";              
               

        } else {

            userErr.style.display = 'none';
            bUser = true;
            obj.usuario=us.trim();
        }

       
        if (passw.trim().length == 0 && bUser) {
           
            passErr.innerHTML = "Contraseña inválida";
            passErr.style.color = "red";
            passErr.style.display = "block";
            bPassw = false;            
            inputPass.value="";
            

        } else {        

            bPassw = true;

        }


        cerrar.addEventListener("click", ()=> {

            obj.usuario="";
            obj.clave="";

        })


    }
     

    
         


}

