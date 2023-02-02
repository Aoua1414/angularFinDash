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
  form:any={nom_prenom:'', adresse:'', numero:''};
  erreur: any;
  isLoggedIn:any;
  id:any;
  lespharms:any;

  constructor(private pharm:PharmServiceService, private tokenStorage: TokenStorageService, private route: Router, private pharms: PharmServiceService){}

  ngOnInit(): void {
    this.id = this.tokenStorage.getUser().id;
    console.log("ertyuio"+this.id);

    //affichage fonction
    this.pharms.Listerpharm().subscribe(data=>{
      this.lespharms=data;
      console.log("lister mes pharms")
      console.log(this.lespharms)


    })
  }
  onSubmit():void{
    const{nom_prenom, numero, adresse}=this.form;
    this.pharm.ajout_pharm(nom_prenom, numero, adresse, this.id).subscribe(
      data=> {
        this.success=data
        if(this.success.status == true){
          this.erreur = this.success.message
        }
        else{
          this.erreur = this.success.message
        }
      }
    )

  }

}
