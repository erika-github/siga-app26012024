import { Component } from '@angular/core';
import { User } from '../../models/user/user';
import { ValidationForm } from '../../classes/validation-form';
import { FormService } from 'src/app/LandingPage/services/login-form.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {

  user: User = new User();
  studentId: any;
  mySubscription: any;


  constructor(

    private val: ValidationForm,
    private formService: FormService,
    private router: Router

  ) {

    this.formService.loadScript();

  }



  public validation(): void {

    this.val.formValidation(this.user, this.user.usuario, this.user.clave);

    console.log("Usuario y passw", this.user);

    this.router.navigate(['/sigaHomePage'])


  }

}


