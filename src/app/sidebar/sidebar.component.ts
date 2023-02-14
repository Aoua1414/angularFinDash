import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  logout(): void{
    this.tokenStorage.signOut();
    this.route.navigateByUrl('login')
    window.location.reload();
  }

  constructor(private tokenStorage: TokenStorageService, private route: Router){}
  ngOnInit() {

  }


}
