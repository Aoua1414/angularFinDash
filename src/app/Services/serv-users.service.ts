import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServUsersService {

  constructor(private http:HttpClient) { }

  ListerUsers():Observable<any>{
    return this.http.get('http://localhost:8080/user/liste');
  }
  
}
