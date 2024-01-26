import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetRepr } from "../models/getRepr";
import { Representative } from "../models/representative";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class GetReprService {
  
      
  
     //urlEndPoint: string="https://tecnodestrezasiga-api.lat/siga/api/v1/representante/consultarporcedula";  

     urlEndPoint: string="http://localhost:8090/siga/api/v1/representante/consultarporcedula"; 
                        
  
     httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  
  
      constructor(private http:HttpClient){
  
      }
  
     
      getRepresentative(getRepr:GetRepr):Observable<Representative>{  
      
      return this.http.post<Representative>(this.urlEndPoint, getRepr, {headers:this.httpHeaders})    
    
           
      }

    }