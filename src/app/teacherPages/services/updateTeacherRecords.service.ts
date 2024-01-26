import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
//import { Student } from '../models/student';
import { TeacherDetail } from '../models/teacherDetail';



@Injectable({
  providedIn: 'root'
})
export class UpdateTeacherRecordsService {  

 

   //urlEndPoint: string= "https://tecnodestrezasiga-api.lat/siga/api/v1/docente/modificar";

   urlEndPoint: string= "http://localhost:8090/siga/api/v1/docente/modificar";


   httpHeaders = new HttpHeaders({'Content-Type':'application/json'})


    constructor(private http:HttpClient){

    }
   

    updateTeacher(teacherDetail: TeacherDetail):Observable<TeacherDetail>{   
    

      return this.http.put<TeacherDetail>(`${this.urlEndPoint}/${teacherDetail.id}`,teacherDetail, {headers:this.httpHeaders});
  
      
      }

    
}