import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../DTOS/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
      private fb:FormBuilder,
      private _LoginService:LoginService
      ) { }

  loginForm!:FormGroup
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm=this.fb.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]],
      
    })
  }

  login(){
    this._LoginService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log(response)
      }
    })
    //console.log(this.loginForm.value);
  }

}
