import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class CalculateAge {

    public calculateAge(fechaNac:any):any{

    var fecha = fechaNac.value; 
    var hoy = new Date();
    var cumpleanios = new Date(fecha);    
    var calculoEdad: any = hoy.getFullYear() - cumpleanios.getFullYear();
    var m = hoy.getMonth() - cumpleanios.getMonth();



    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanios.getDate())) {
        calculoEdad--;
    }

    return calculoEdad;
    }

    
}