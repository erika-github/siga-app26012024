import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { CountryNac } from '../models/countryNac';
import { GetProfessions } from '../models/getProfessions';



@Injectable({
  providedIn: 'root'
})
export class ProfessionsService {



   //urlEndPoint: string="https://tecnodestrezasiga-api.lat/siga/api/v1/profesiones";  

   urlEndPoint: string="http://localhost:8090/siga/api/v1/profesiones";


    constructor(private http:HttpClient){

    }

    getProfessions():Observable<GetProfessions[]>{
    
    return this.http.get<GetProfessions[]>(this.urlEndPoint);
 
         
    }
}