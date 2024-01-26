import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { Student } from "../models/student";
import { TeacherDetail } from "../models/teacherDetail";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class CreateTeacherRecordsService {
  
  
  
     //urlEndPoint: string="https://tecnodestrezasiga-api.lat/siga/api/v1/docente/crear";  

     urlEndPoint: string="http://localhost:8090/siga/api/v1/docente/crear";  
  
     httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  
  
      constructor(private http:HttpClient){
  
      }
  
     
      createTeacher(teacherDetail:TeacherDetail):Observable<TeacherDetail>{      
  
      
      return this.http.post<TeacherDetail>(this.urlEndPoint, teacherDetail, {headers:this.httpHeaders})
      
      
           
      }
  }