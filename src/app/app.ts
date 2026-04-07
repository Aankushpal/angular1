import { Component, signal } from '@angular/core';
import { LoginComponent } from './login/login';
import { Custom } from "./custom/custom";
import { Counter } from './counter/counter';
import { CreateEmp } from "./EMS/create-emp/create-emp";
import { Navbar } from "./custom/navbar/navbar";
import { ApiDataBind } from "./API-Call/api-data-bind/api-data-bind";
import { TdForm } from "./td-form/td-form";
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, Counter, CreateEmp, Navbar, ApiDataBind, TdForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ankush');
  countVal =1;
  countVal2 =11;
  countVal3 =21;

  counter(){
    this.countVal = this.countVal + 1;
    this.countVal2 = this.countVal2 + 1;
    this.countVal3 = this.countVal3 + 1;
  }
}
