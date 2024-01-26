import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Representative } from "../models/representative";
import { ValidateParentesco } from "../services/validateParentesco";
import swal from 'sweetalert2';
import { ErrorGetReprRecords } from "./errorGetReprRecord";
import { ResponseGetReprRecords } from "./responseGetReprRecord";
import { GetReprService } from "../services/getRepr.service";
import { StudentDetail } from "../models/studentDetail";
import { CleanFields } from "./utils/CleanFields";


@Injectable({
    providedIn: 'root'
})

export class GetRepresentative {

    constructor(
        private validateParentesco: ValidateParentesco,
        private getReprService: GetReprService,
        private errorGetReprRecords:ErrorGetReprRecords,
        private responseGetReprRecords:ResponseGetReprRecords,
        private cleanFields:CleanFields
    ) {

    }

    
    getRepresentative(repre: Representative, studentDetail:StudentDetail, tipo:any) {

        
        var tipoDocBusq = document.getElementById('tipoDocReprBusq') as HTMLSelectElement;
        var numDocBusq = document.getElementById('numDocReprBusq') as HTMLInputElement;        
        var search = document.getElementById('search') as HTMLDivElement;         
        
        search.style.display="block";         
        
            
        if (tipoDocBusq.value !== "default" && numDocBusq.value !=='') {

            this.cleanFields.clean(studentDetail, tipo);

            if(numDocBusq.value.length == 8) {

            repre.tipoDocumento = tipoDocBusq.value;
            repre.numeroDocumento = numDocBusq.value;            

            //Llamado al servicio de consulta de representante
           
            this.getReprService.getRepresentative(repre)
                .subscribe({
                    next: response => {  
                       
                        this.responseGetReprRecords.responseGetRepr(response, studentDetail, tipo);
                        this.validateParentesco.loadScript();  
                        search.style.display="none";
                      

                    },

                    error: error => {

                        
                        if (error.status == 404) {

                            this.errorGetReprRecords.errorGetReprRecords();
                            search.style.display="none";

                        }

                    }

                                
                })

            }else if(numDocBusq.value.length >=1 && numDocBusq.value.length <=7 ){

                swal('Campos de Búsqueda', `El campo Número de Documento debe contener al menos 8 caracteres`, 'warning');
                
                             
                this.cleanFields.clean(studentDetail, tipo);                       
                search.style.display="none"; 

            }else{

                swal('Campos de Búsqueda', `El campo Número de Documento debe contener un máximo de 8 caracteres`, 'warning');
                
                this.cleanFields.clean(studentDetail, tipo);               
                search.style.display="none"; 
            }

        } else {

            tipoDocBusq.focus();
            swal('Campos de Búsqueda', `Debe proporcionar un valor en los campos: Tipo y Número de Documento`, 'warning');
            search.style.display="none";


        }

    }



}


