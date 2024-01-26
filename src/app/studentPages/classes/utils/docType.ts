
import { Injectable } from "@angular/core";
import { StudentDetail } from "../../models/studentDetail";

@Injectable({
    providedIn: 'root'
})
export class DocType {

    public docType(e: any, selectLugNac: any, nacionalidad: any, spanLugarNac: any, spanNac: any, tipo: any, object:any): void {

        

        if (e.target.value == "V") {            


            if (tipo == "STD") {
               
                object.lugarDeNacimiento = "VENEZUELA";
                object.nacionalidad = "VENEZOLANA"
              

            } else {
                
                object.representante.lugarDeNacimiento = "VENEZUELA";
                object.representante.nacionalidad= "VENEZOLANA"
               
            }
            spanLugarNac.style.display = "none";
            spanNac.style.display = "none";
            selectLugNac.style.border = "1px solid lightGray";
            nacionalidad.style.border = "1px solid lightGray"
      

        } else if ((e.target.value == "E" || e.target.value == "P") && nacionalidad.value == "VENEZOLANA") {

           

            if (tipo == "STD") {

                object.lugarDeNacimiento="default";
                object.nacionalidad="";
                


            } else {
                
                object.representante.lugarDeNacimiento="default";
                object.representante.nacionalidad=""
              

            }
        } else if (e.target.value == "default") {
            

            if (tipo == "STD") {

                
                object.lugarDeNacimiento="default";
                object.nacionalidad="";                                  



            } else {
               
                object.representante.lugarDeNacimiento="default";
                object.representante.nacionalidad="";                              
                        

            }
        }

      
    }

}