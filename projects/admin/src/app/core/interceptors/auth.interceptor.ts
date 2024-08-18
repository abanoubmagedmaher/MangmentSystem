import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // if(request.url.includes('all_Tasks'))
    // {
          // Add Your Logic For All Api include Tasks 
    // }
    const newRequest=request.clone({
      headers:request.headers
      .append(
        'Authorization',
        'Bearer ' + localStorage.getItem('token'))
      .append('Api_Key','System_Key@2024')
    })

    return next.handle(newRequest);
  }
}
