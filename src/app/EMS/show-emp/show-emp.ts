import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../create-emp/create-emp';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-emp',
  imports: [CommonModule, FormsModule],  //? Common Module is required for @if, @for, [ngClass] and [ngStyle],  and FormsModule is required for ngModel and other form related directives
  templateUrl: './show-emp.html',
  styleUrl: './show-emp.css',
})
export class ShowEmp {
  // * Inputs are supposed to be read-only data from parent.
  @Input() empList: Employee[] = [];
  @Input() activeEmp: number = 0;
  @Input() selectRole:string = 'all';

  @Output() deleteEmp = new EventEmitter<number>();
  @Output() searchEvent = new EventEmitter<string>();
  @Output() editEvent = new EventEmitter<number>();


  removeEmp(idx:number){
    console.log(idx)
    this.deleteEmp.emit(idx)
  }

  editEmp(id:number){
    console.log(id)
    this.editEvent.emit(id)
  }

  //! (ngModelChange) only works if the ngModel directive is present on the element

  selectedRole(val:string){
    this.selectRole = val;
    this.searchEvent.emit(this.selectRole)
  }

}
