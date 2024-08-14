import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../DTOS/login';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
      private fb:FormBuilder,
      private _LoginService:LoginService,
      private toastr:ToastrService,
      private router:Router
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
        this.toastr.success("Success",`Login ${response.message}`)
        this.router.navigate(['/tasks'])
        console.log(response)
      },
      error: (error) => {
        this.toastr.error("Error",`Login Failed ${error.message}`)
      }
    })
    //console.log(this.loginForm.value);
  }

}
