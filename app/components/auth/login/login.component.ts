import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { errorMessage, timeMessage, timeMessage2 } from 'src/app/functions/alerts';
import { User } from 'src/app/models/user';
import { User2 } from 'src/app/models/user2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrom:FormGroup;
  user:User;
  user2:User2;

  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) {
    this.createFrom();
   }
 
  ngOnInit(): void {
  }
 login():void{
  if(this.loginFrom.invalid){
    return Object.values(this.loginFrom.controls).forEach(control =>{
      control.markAsTouched();
    });
  }

    else{
      this.setUser();
      this.authService.login(this.user2).subscribe((data:any)=>{
        timeMessage2("Ingresando...",1500);
        this.authService.saveSession(data.access_token.token, data.user.rol)
        if (this.authService.getRol() === "invitado") {
          this.router.navigate(['/home'])
          
        } else {
          this.router.navigate(['/home2'])
          
        }
       
      }, error=>{ 
        errorMessage('El usuario no existe')
         
       });
     }
    }
 get emailValidate(){
  return(
    this.loginFrom.get('email').invalid && this.loginFrom.get('email').touched
    );
}

get passwordValidate(){
   return(
     this.loginFrom.get('password').invalid && this.loginFrom.get('password').touched
     );
}

createFrom():void{
  this.loginFrom=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
    password:['',[Validators.required]]
  });
}
setUser():void{
  this.user2=
  {
   
    email:this.loginFrom.get('email').value,
    password: this.loginFrom.get('password').value
  };
}
}