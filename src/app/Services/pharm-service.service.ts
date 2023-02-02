import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmServiceService {

  constructor(private http:HttpClient  ) { }

  //ajouter rdv

 ajout_pharm(
  nom_prenom:any,
  numero:any,
  adresse:any,
  id:any
 ):Observable<any>{
  console.log(id, "test")
  const pharm=[
  {
   "nom_prenom":nom_prenom,
   "numero":numero,
   "adresse":adresse,
   "user":{
    "id":id
}

  }]
  return this.http.post(`http://localhost:8080/pharmacien/ajouter`, pharm);
 }

 //lister pharmaciens 

  Listerpharm(): Observable<any>{
  return this.http.get('http://localhost:8080/pharmacien/liste');
 }

}
