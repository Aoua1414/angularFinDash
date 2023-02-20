import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmServiceService } from '../Services/pharm-service.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-list-pharm',
  templateUrl: './list-pharm.component.html',
  styleUrls: ['./list-pharm.component.css']
})
export class ListPharmComponent implements OnInit{
  success: any;
  form:any={nom_prenom:null, adresse:null, numero:null};
  erreur: any;
  isLoggedIn:any;
  id:any;
  lespharms:any;
  nom_prenom:any;
  adresse:any;
  numero:any;
  user: any;

  p:number=1;
  responsive=true;

  constructor(private pharm:PharmServiceService, private tokenStorage: TokenStorageService, private route: Router, private pharms: PharmServiceService){}

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser().id;
    console.log("ertyuio"+this.id);

    //affichage fonction
    this.pharms.Listerpharm().subscribe(data=>{
      this.lespharms=data;
      console.log("lister mes pharms")
      console.log(this.lespharms)


    })
  }
  onSubmit(){
  //  const{nom_prenom, numero, adresse}=this.form;
    this.pharm.ajout_pharm(this.form.nom_prenom, this.form.numero, this.form.adresse, this.user).subscribe(
      data=> {
        this.success=data;

        this.reloadPage();

        console.log("nom"+this.success.nom_prenom);
        console.log("numero"+this.numero)
        console.log("adresseadre"+this.adresse)
        console.log("id"+this.id)
        if(this.success.status == true){
          this.erreur = this.success.message
        }
        else{
          this.erreur = this.success.message
        }
      }
    )

  }
  // supp les champs apres ajout

 reloadPage(): void {
  window.location.reload();
 }

}
