import { Login } from './../DTOS/login';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _HttpClient: HttpClient) { }

  login(userData: any): Observable<any> {
    return this._HttpClient.post(
      'https://localhost:7139/api/Account/login',
      userData
    );
  }
}
