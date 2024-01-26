import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { Student } from '../models/student';



@Injectable({
  providedIn: 'root'
})
export class UpdateRecordsService {

  

 // urlEndPoint: string="https://tecnodestrezasiga-api.lat/siga/api/v1/alumno/modificar";
 
  urlEndPoint: string="http://localhost:8090/siga/api/v1/alumno/modificar";

   httpHeaders = new HttpHeaders({'Content-Type':'application/json'})


    constructor(private http:HttpClient){

    }
   

    updateStudent(student: Student):Observable<Student>{   
    

      return this.http.put<Student>(`${this.urlEndPoint}/${student.id}`,student, {headers:this.httpHeaders});
  
      
      }

    
}