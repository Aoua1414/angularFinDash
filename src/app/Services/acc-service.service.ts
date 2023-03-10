import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccServiceService {
  

  constructor(private http: HttpClient) { }

  ListerUsers():Observable<any>{
    return this.http.get('http://localhost:8080/user/liste');
  }

  
  Listerpharm(): Observable<any>{
    return this.http.get('http://localhost:8080/pharmacien/liste');
   }
  
  
}
