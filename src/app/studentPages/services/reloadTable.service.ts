import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { AssingCoursesSaveRec } from '../classes/assingCoursesSaveRec';


@Injectable({
  providedIn: 'root',
})
export class ReloadTableService {

  sum:any=0

  constructor(private assingCoursesSaveRec: AssingCoursesSaveRec) { } 
  
  reloadTable(courseObj: Course, cont:any): void {  
   

    cont=this.sum; 

    var spanCurso = document.getElementById('spanCurso') as HTMLSpanElement;

    var tableResponsive = document.getElementsByClassName(
      'table-responsive'
    )[0] as HTMLUnknownElement;

    var longi: any;    

    spanCurso.style.display = 'none';
    tableResponsive.style.border = 'unset';

    courseObj.id = '';

    $('#datatableexample').DataTable().destroy();

    var tr = document.getElementsByTagName('tr')[1];

    if (tr) {
      tr.remove();     
    }

    $('#datatableexample').DataTable({
      
      "autoWidth": false,
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: false,
      lengthMenu: [10, 25, 50],
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json',
        
      },
      data: [],
      ajax: {
        type: 'GET',
       // url: 'https://tecnodestrezasiga-api.lat/siga/api/v1/curso/listado',

        url: 'http://localhost:8090/siga/api/v1/curso/listado',
        dataSrc: function (json) {
          longi = json.length;
          /*Ejemplo de como colocar un valor desde typeScript hacia el Html, 
          para después una vez estando allí, poderlo tomar desde el javaScript. 
          Es una de las formas para pasar variables a js.

          var prueba = document.getElementById('longitud') as HTMLSpanElement;
          prueba.innerHTML = longi;*/

          return json;
        },       
        
      },

      columns: [
        { data: 'id' },
        { data: 'annio' },
        { data: 'seccion' },
        { data: 'nivel' },
        { data: 'turno' },
        { data: 'periodoAcademico' },
        {
          data: null,
          render: function (json) {
            /*Ejemplo de como se puede insertar un script en el return. No activar la línea con el script.            
              return '<script> var prueb= document.getElementById("longitud"); console.log(prueb.innerHTML); var media=window.matchMedia("(max-width: 640px) and (orientation:portrait)"); if(media.matches){ for(var i=0; i<prueb.innerHTML; i++){  document.getElementsByClassName("btn btn-primary")[i]?.setAttribute("style", "font-size:12px;")}}else{}</script> <button type="button" id = "assignButton" class=" btn-primary">Asignar</button>';*/
             

              return '<button type="button" id = "assignButton"  class="" style="background-color: #007BFF; color: white; border: unset; border-radius: 5px; padding: 7px 13px;" onMouseOver=this.style.background="#0069D9" onMouseOut=this.style.background="#007BFF">Asignar</button>'
          
              
            },
        },
      ],
    });  
   


    const assingCourse = (event: any) =>{      

        this.assingCoursesSaveRec.assignCourseRec(event, courseObj); 

        /*Se apaga el escucha, para que al momento de recargar la tabla y hacer click en el botón Asignar
        no se acumulen los eventos, sino que al hacer click se ejecute una sola vez la función
        y no queden eventos activos de ejecuciones anteriores*/
      
        $('#datatableexample').off('click', '#assignButton', assingCourse)

    }


    $('#datatableexample').on('click', '#assignButton', assingCourse)  

       

   
  }

  
}

