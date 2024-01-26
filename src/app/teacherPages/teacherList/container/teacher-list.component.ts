import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { faCircleXmark, faEraser, faEye, faHouse, faMagnifyingGlass, faPencil, faRotateLeft, faTrashCanArrowUp, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { TeacherDeactivation } from '../../classes/teacherDeactivation';
import { Router } from '@angular/router';
import { DeactivateTeacher } from '../../models/deactivateTeacher';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent{

  data: any;
  deactiveTeacher: DeactivateTeacher = new DeactivateTeacher();

  faPencil = faPencil;
  faEye = faEye;
  faTrashCanArrowUp = faTrashCanArrowUp;
  faUserPlus = faUserPlus;
  faHouse = faHouse;
  faCircleXmark = faCircleXmark


  constructor(private http: HttpClient,    
    private router: Router,
    private teacherDeactivation: TeacherDeactivation) {




    /*Así sería la url ( this.http.get('/siga/api/v1/docente/listado').subscribe(data => {...} ), cuando no se tiene definido 
      a nivel de backend el cross origin. Adicionalmente, se debe colocar la configuración correspondiente en el archivo: proxy.conf.json así:
    
      {
    
    "/siga" : {
           
      "target":"https://sea-lion-app-4pnm8.ondigitalocean.app",
      "secure": true,
      "changeOrigin": true,
      "logLevel": "debug"
    
    }
    
    
    }
    
    y en el archivo angular.json colocar la linea:  "proxyConfig": "src/proxy.conf.json" , debajo de browserTarget:
    
    
     "serve": {
              "builder": "@angular-devkit/build-angular:dev-server",
              "options": {
                "browserTarget": "SigaProject:build"
    
               ****colocar la línea AQUI*****
    
              },
    
    
      Nota: hay que tener en cuenta, que si se hace de la forma anteriormente mencionada, las urls del resto de las páginas,
      en este caso no deben contener la palabra siga que se menciona en al archivo: proxy.conf.json ("/siga"), ya que 
      interfiere con la url del servicio.
     */

      /* esta es la url anterior:
      this.http.get('https://sea-lion-app-4pnm8.ondigitalocean.app/siga/api/v1/docente/listado').subscribe(data => {*/

    //this.http.get('https://tecnodestrezasiga-api.lat/siga/api/v1/docente/listado').subscribe(data => {

    this.http.get('http://localhost:8090/siga/api/v1/docente/listado').subscribe(data => {

      this.data = data;
      setTimeout(() => {

        $('#datatableexample').DataTable({
          pagingType: 'full_numbers',
          pageLength: 10,
          processing: true,
          lengthMenu: [10, 25, 50],
          language: {
            url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'

          }
        });
      }, 1);


    }, error => console.error(error));


  }
  

  teacherDeactivacion(id: any){


    this.teacherDeactivation.Option(id, this.deactiveTeacher)  


  }
 

}
