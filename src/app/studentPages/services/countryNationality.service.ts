import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryNac } from '../models/countryNac';



@Injectable({
  providedIn: 'root'
})
export class CountryNationalityService {



   //urlEndPoint: string="https://tecnodestrezasiga-api.lat/siga/api/v1/nacionalidades";  
   urlEndPoint: string="http://localhost:8090/siga/api/v1/nacionalidades"; 


    constructor(private http:HttpClient){

    }

    getCountryNac():Observable<CountryNac[]>{
    
    return this.http.get<CountryNac[]>(this.urlEndPoint);
 
         
    }
}