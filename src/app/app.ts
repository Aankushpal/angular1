import { Component, signal } from '@angular/core';
import { LoginComponent } from './login/login';
import { Custom } from "./custom/custom";
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ankush');
}
