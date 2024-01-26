import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { Student } from '../models/student';
import { DeactivateStudent } from '../models/deactivateStudent';



@Injectable({
  providedIn: 'root'
})
export class DeactivateStudentService {

  

  //urlEndPoint: string="https://tecnodestrezasiga-api.lat/siga/api/v1/alumno/desactivar"; 

  urlEndPoint: string="http://localhost:8090/siga/api/v1/alumno/desactivar";
                       

   httpHeaders = new HttpHeaders({'Content-Type':'application/json'})


    constructor(private http:HttpClient){

    }
   

    deactivateStudent(deactivateStudent: DeactivateStudent):Observable<DeactivateStudent>{   
    

      return this.http.put<DeactivateStudent>(`${this.urlEndPoint}/${deactivateStudent.id}/${deactivateStudent.motivo}`, deactivateStudent, {headers:this.httpHeaders});
  
      
      }

    
}