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
  const pharm=
  {
   "nom_prenom":nom_prenom,
   "numero":numero,
   "adresse":adresse,
   

  }

  console.log(nom_prenom, "nomprenom")
  console.log(numero, "numero")
  console.log(adresse, "adresse")
  return this.http.post(`http://localhost:8080/pharmacien/ajouter/${id}`,pharm);
 }

 //lister pharmaciens 

  Listerpharm(): Observable<any>{
  return this.http.get('http://localhost:8080/pharmacien/liste');
 }

 //modifier

 
  // //modifier pharmacien


  // modif_pharm(
  //   nom_prenom:any,
  //   numero:any,
  //   adresse:any,
  //    id:any
  //    ):Observable<any>{
  
  //     console.log(id, "hdghhdhdhdh")
  //   const pharm=
  
  //   {
  //     "nom_prenom":nom_prenom,
  //     "numero":numero,
  //     "adresse":adresse,
  // }
  
  //   return this.http.put(`http://localhost:8080/api/pharmacien/modifier/${id}`,pharm);
  // }
  
  
  // // fonction afficher un seul traitement
  
  // afficherunseulpharm (id_traitement: number):Observable<any>{
  //   console.log("id du traitement est ",id_traitement)
  //   return this.http.get(`http://localhost:8080/api/pharmacien/parid/${id_traitement}`);
  // }


}
