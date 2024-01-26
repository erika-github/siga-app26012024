import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeacherDetail } from '../models/teacherDetail';





@Injectable({
  providedIn: 'root'
})
export class TeacherDetailService {

   
    //urlEndPoint: string="https://tecnodestrezasiga-api.lat/siga/api/v1/docente/consultarporid";

    urlEndPoint: string="http://localhost:8090/siga/api/v1/docente/consultarporid";


    constructor(private http:HttpClient){

    }

    getTeacher(id: any):Observable<TeacherDetail>{   
    

    return this.http.get<TeacherDetail>(`${this.urlEndPoint}/${id}`);

    
    }
}