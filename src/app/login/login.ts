import { Component } from '@angular/core';
import { Custom } from '../custom/custom';

@Component({
  selector: 'app-login',
  imports: [Custom],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  userName: string = 'Ankush!!';

  data= [
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      department: 'Engineering',
      city: 'Delhi',
    },
    {
      id: 2,
      name: 'Priya Verma',
      email: 'priya.verma@example.com',
      department: 'Human Resources',
      city: 'Mumbai',
    },
    {
      id: 3,
      name: 'Aman Gupta',
      email: 'aman.gupta@example.com',
      department: 'Finance',
      city: 'Bengaluru',
    },
  ];

  rcvngDataFromChild:any;
  reciverData(prop: string){
    this.rcvngDataFromChild = prop
  }
}
