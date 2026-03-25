import { Component } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-api-data-bind',
  imports: [],
  templateUrl: './api-data-bind.html',
  styleUrl: './api-data-bind.css',
})
export class ApiDataBind {

   users: any[] = [];

  constructor(private empsData : UserService){}

  loadUsers(){
    this.empsData.getUsers().subscribe((data)=>{
      console.log(data)
    })
  }

}
