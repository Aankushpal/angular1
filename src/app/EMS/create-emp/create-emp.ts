import { Component } from '@angular/core';
import { ShowEmp } from "../show-emp/show-emp";
import { FormsModule } from '@angular/forms';
import { NgStyle, NgClass } from "@angular/common";

export interface  Employee{
  id: number;
  name: string;
  role: string;
  salary: number;
  isActive: boolean
}

@Component({
  selector: 'app-create-emp',
  imports: [ShowEmp, FormsModule, NgStyle, NgClass],
  templateUrl: './create-emp.html',
  styleUrl: './create-emp.css',
})

export class CreateEmp {
  empList : Employee[] = [];
  totalActive: number = 0;

  name!:string;
  role!: string;
  salary!: number | string;
  salaryCheck : boolean = false

  addEmployee(){
    let obj = {
      id : Date.now(),
      name : this.name,
      role : this.role,
      salary : + this.salary,
      isActive : true
    }
    console.log(obj)
    this.empList.push(obj)

    console.log(this.empList)

    this.name = ''
    this.salary = ''
    this.role = ''
  }

  checkSalaryType(){
    let sal = + this.salary;
    if(isNaN(sal) || sal <= 0){
      console.log("Invalid value!!")
      this.salaryCheck = true;
    }else{
      console.log("Valid value!!")
      this.salaryCheck = false;
    }
  }

}
