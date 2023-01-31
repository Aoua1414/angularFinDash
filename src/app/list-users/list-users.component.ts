import { Component, OnInit } from '@angular/core';
import { ServUsersService } from '../Services/serv-users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
 
  lesUsers:any;

  constructor(private mesusers : ServUsersService){ }
  ngOnInit():void{
this.mesusers.ListerUsers().subscribe(data=>{
  this.lesUsers=data;
  console.log("ttryt"+ this.lesUsers)
})

  }

}
