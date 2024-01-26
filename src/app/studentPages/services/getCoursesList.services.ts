import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';



@Injectable({
  providedIn: 'root'
})
export class GetCoursesListServices {



   //urlEndPoint: string="https://tecnodestrezasiga-api.lat/siga/api/v1/curso/listado";  

   urlEndPoint: string="http://localhost:8090/siga/api/v1/curso/listado";  


    constructor(private http:HttpClient){

    }

    getCoursesList():Observable<Course[]>{
    
    return this.http.get<Course[]>(this.urlEndPoint);
 
         
    }

    
}