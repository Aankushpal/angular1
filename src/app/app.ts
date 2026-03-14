import { Component, signal } from '@angular/core';
import { LoginComponent } from './login/login';
import { Custom } from "./custom/custom";
import { Counter } from './counter/counter';
import { CreateEmp } from "./EMS/create-emp/create-emp";
import { Navbar } from "./custom/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [LoginComponent, Counter, CreateEmp, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ankush');
}
