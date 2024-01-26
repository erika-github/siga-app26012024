import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class SubjectsService {



  // urlEndPoint: string="https://tecnodestrezasiga-api.lat/siga/api/v1/materia/listado";  

  urlEndPoint: string="http://localhost:8090/siga/api/v1/materia/listado";


    constructor(private http:HttpClient){

    }

    getSubjects():Observable<string[]>{
    
    return this.http.get<string[]>(this.urlEndPoint);
 
         
    }
}