import { Injectable } from "@angular/core";
import { Course } from "../models/course";

@Injectable({
    providedIn: 'root'
  })
  export class AssingCourses { 
 
    
  
    public assignCourse(e: any, obj:Course):Course { 

      
      var scroll_= document.getElementById('h2EditarCurso') as HTMLUnknownElement;
      scroll_.scrollIntoView();
  
      var spanCurso = document.getElementById('spanCurso') as HTMLSpanElement; 
      var tableResponsive = document.getElementsByClassName('table-responsive')[0] as HTMLUnknownElement;    
      var divCourse = document.getElementById('divCourse') as HTMLDivElement;
      
  
      spanCurso.style.display = "none";    
      divCourse.style.border="1px solid lightGray";
  
        
      var id = e.target.parentNode.parentNode.children[0].textContent;
      var annio = e.target.parentNode.parentNode.children[1].textContent;
      var seccion = e.target.parentNode.parentNode.children[2].textContent;
      var nivel = e.target.parentNode.parentNode.children[3].textContent;
      var turno = e.target.parentNode.parentNode.children[4].textContent;
      var academico = e.target.parentNode.parentNode.children[5].textContent;   
           
  
      this.deleteTable(id, annio, seccion, nivel, turno, academico);
  
      obj.id=id;
      obj.annio=annio;   
      obj.seccion=seccion;
      obj.nivel=nivel;
      obj.turno=turno;
      obj.periodoAcademico=academico      
      
      return obj;
    }
  
  
    deleteTable(id: string, annio: string, seccion: string, nivel: string, turno: string, academico: string): void {
  
 
      var tableBody = document.getElementById('tbody1') as HTMLTableElement;
      var tabla1 = document.getElementById('tablecursos') as HTMLTableElement
      var content = document.getElementById('tablecursos')as HTMLTableElement;   
            
      
  
      if (tableBody) {
       
        tableBody.parentNode?.removeChild(tableBody);      

      }


      if (tabla1.rows.length> 1){

        content.deleteRow(1);
         
        }

      
      
        var tabla = document.createElement("table");       
        var tblBody = document.createElement("tbody");   
             
          
        var newRow   = tabla.insertRow(0);
        var newCell  = newRow.insertCell(0);
        var newCell1 = newRow.insertCell(1);
        var newCell2 = newRow.insertCell(2);
        var newCell3 = newRow.insertCell(3);
        var newCell4 = newRow.insertCell(4);
        var newCell5 = newRow.insertCell(5);        
        var newCell6 = newRow.insertCell(6);      
      
          
        
      
        var newTextId = document.createTextNode(id);
        newCell.appendChild(newTextId);
  
        var newTextAnnio = document.createTextNode(annio);
        newCell1.appendChild(newTextAnnio);
  
        var newTextSeccion = document.createTextNode(seccion);
        newCell2.appendChild(newTextSeccion);
  
        var newTextNivel = document.createTextNode(nivel);
        newCell3.appendChild(newTextNivel);
  
        var newTextTurno = document.createTextNode(turno);
        newCell4.appendChild(newTextTurno);
  
        var newTextAcademico = document.createTextNode(academico);
        newCell5.appendChild(newTextAcademico);
  
  
  
        newCell6.innerHTML = '<div style="text-align:center"><img src="assets/images/check2Img.png" width="35" height="35" /></div>';
  
        tabla.appendChild(tblBody);
  
        tabla.setAttribute("class", "table table-striped table-bordered table-sm row-border hover");
        tabla.setAttribute("id", "datatableexample");
         
        content.appendChild(newRow);    
        
       
  
    }
  
  }
    