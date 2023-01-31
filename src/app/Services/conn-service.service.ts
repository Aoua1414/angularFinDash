import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ConnServiceService {

  constructor(private http:HttpClient) { }
  //connexion

  login(username:string, password: string): Observable<any>{

    return this.http.post('http://localhost:8080/api/log',{
      username,
      password
    }, httpOptions);
  }
}
