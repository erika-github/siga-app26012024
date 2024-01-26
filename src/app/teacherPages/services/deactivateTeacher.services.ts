import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeactivateTeacher } from '../models/deactivateTeacher';



@Injectable({
  providedIn: 'root'
})
export class DeactivateTeacherService {

  

  //urlEndPoint: string="https://tecnodestrezasiga-api.lat/siga/api/v1/docente/desactivar";  

  urlEndPoint: string="http://localhost:8090/siga/api/v1/docente/desactivar";

   httpHeaders = new HttpHeaders({'Content-Type':'application/json'})


    constructor(private http:HttpClient){

    }
   

    deactivateTeacher(deactivateTeacher: DeactivateTeacher):Observable<DeactivateTeacher>{   
    

      return this.http.put<DeactivateTeacher>(`${this.urlEndPoint}/${deactivateTeacher.id}/${deactivateTeacher.motivo}`, deactivateTeacher, {headers:this.httpHeaders});
  
      
      }

    
}