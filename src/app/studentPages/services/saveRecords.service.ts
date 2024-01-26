import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Student } from "../models/student";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class SaveRecordsService {
  
  
  
     //urlEndPoint: string="https://tecnodestrezasiga-api.lat/siga/api/v1/alumno/crear";  

     urlEndPoint: string="http://localhost:8090/siga/api/v1/alumno/crear"; 
  
     httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  
  
      constructor(private http:HttpClient){
  
      }
  
     
      saveStudent(student:Student):Observable<Student>{      
  
      
      return this.http.post<Student>(this.urlEndPoint, student, {headers:this.httpHeaders})
      
      
           
      }
  }