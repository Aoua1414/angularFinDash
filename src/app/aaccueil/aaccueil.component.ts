import { Component } from '@angular/core';
import { AccServiceService } from '../Services/acc-service.service';

@Component({
  selector: 'app-aaccueil',
  templateUrl: './aaccueil.component.html',
  styleUrls: ['./aaccueil.component.css']
})
export class AaccueilComponent {

  totalpharm: any;
  total: any;
  totaluser: any;



  constructor(private accservice : AccServiceService){ }
  ngOnInit():void{
  this.accservice.Listerpharm().subscribe(data=>{
  this.totalpharm=data;
  console.log("ttryt"+ this.totalpharm)

  this.accservice.ListerUsers().subscribe(data=>{
    this.totaluser=data;
  })
})

  }

}
