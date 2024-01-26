import { Injectable } from "@angular/core";
import { CountryNac } from "../../models/countryNac";
import { StudentDetail } from "../../models/studentDetail";

@Injectable({
  providedIn: 'root'
})
export class GetNationality {

  public getNationality(e: any, countryNac: CountryNac[], docType: any, nationality: any, tipo: any, lugarNac:any, valSpanNac: any, valSpanLugarNac: any, object: any) {


    nationality.style.border = "1px solid lightGray";



    if (tipo == "STD") {
      if (e.target.value === "default") {

        object.tipoDocumento = "default";

      }
    } else {

      if (e.target.value === "default") {

        object.representante.tipoDocumento = "default"
      }

    }

    for (let i = 0; i < countryNac.length; i++) {


      if (e.target.value == countryNac[i].paisNac) {

        if (tipo == "STD") {
        
          lugarNac.style.border = "1px solid lightGray";    
          valSpanNac.style.display = "none";        
          valSpanLugarNac.style.display="none"
    

          object.nacionalidad = countryNac[i].gentilicioNac;

          if (countryNac[i].paisNac == "VENEZUELA") {

            object.tipoDocumento = "V";
            docType.style.border = "1px solid lightGray"


          } else if (countryNac[i].paisNac != "VENEZUELA" && (docType.value == "V")) {

            object.tipoDocumento = "default";

          } 

          }else {
          
            lugarNac.style.border= "1px solid lightGray";    
            valSpanNac.style.displya= "none";         
            valSpanLugarNac.style.display= "none";
      
            object.representante.nacionalidad = countryNac[i].gentilicioNac;

            if (countryNac[i].paisNac == "VENEZUELA") {

              object.representante.tipoDocumento = "V";
              docType.style.border = "1px solid lightGray"


            } else if (countryNac[i].paisNac != "VENEZUELA" && (docType.value == "V")) {

              object.representante.tipoDocumento = "default"

            }

        }

      }
    }

    if (e.target.value === "default") {


      if (tipo == "STD") {

        object.nacionalidad = "";       
      

      } else {

        object.representante.nacionalidad = "";
      

      }


    }
  }

}

