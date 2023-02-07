import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnServiceService } from '../Services/conn-service.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string='';

  constructor(private connService: ConnServiceService, private tokenStorage: TokenStorageService, private route: Router ){}

  ngOnInit(){

  }
  onSubmit():void{

    const { username, password } = this.form;
    this.connService.login(username, password).subscribe(data=>{
      this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        console.log(" Role :"+this.roles)
        // this.reloadPage();
        if(this.isLoggedIn == true && this.roles == "ROLE_ADMIN"){
          this.route.navigateByUrl("/aaccueil");
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );



  }

  }


