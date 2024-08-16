import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }



  getAllTasks():Observable<any>{
    let headers= new HttpHeaders()
    headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
    return this.http.get(`https://localhost:7139/api/Patients/GetAllPatients`,{headers});
  }
}
