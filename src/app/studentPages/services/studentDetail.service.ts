import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentDetail } from '../models/studentDetail';





@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {

   
    /*urlEndPoint: string="https://tecnodestrezasiga-api.lat/siga/api/v1/alumno/consultarporid";   */

    urlEndPoint: string="http://localhost:8090/siga/api/v1/alumno/consultarporid";

    constructor(private http:HttpClient){

    }

    getStudent(id: any):Observable<StudentDetail>{   
    

    return this.http.get<StudentDetail>(`${this.urlEndPoint}/${id}`);

    
    }
}