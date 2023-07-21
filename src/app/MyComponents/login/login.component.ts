import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signupUser: any[]= [];
  loginObj:any={
    username:'',
    password:'',

  }
  router: any;
  ngOnInit(): void{
    const localData = localStorage.getItem('signupUser');
    if(localData!=null){
      this.signupUser= JSON.parse(localData)
    }
  }

  onLogIn(){
    const isUserExist = this.signupUser.find(m => m.username == this.loginObj.username && m.password==this.loginObj.password);
    if(isUserExist!=undefined){
        alert('User login successfully');

    }else{
        alert('Wrong Credentials');

    }
  }

 logout(){
      localStorage.removeItem('signupUser');
      
 }

}


