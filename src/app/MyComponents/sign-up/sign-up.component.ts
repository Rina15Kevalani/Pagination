import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupUser: any[]= [];
  signupObj:any={
    username:'',
    name:'',
    email:'',
    phone: '',
    password:'',
    confirmpassword:''
  }

  constructor(){}

  ngOnInit():void{

  }
  onSignUp(){
    this.signupUser.push(this.signupObj);
    localStorage.setItem('signupUser', JSON.stringify(this.signupUser));
    this. signupObj={
      username:'',
      name:'',
      email:'',
      phone: '',
      password:'',
      confirmpassword:''
    }
    alert('User Sign Up successfully')
  }
}









