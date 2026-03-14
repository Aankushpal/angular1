import { Component, Input } from '@angular/core';
import { Employee } from '../create-emp/create-emp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-emp',
  imports: [CommonModule],
  templateUrl: './show-emp.html',
  styleUrl: './show-emp.css',
})
export class ShowEmp {
  @Input() empList: Employee[] = [];
  @Input() activeEmp: number = 0;
}
