import { Component } from '@angular/core';
import { ShowEmp } from '../show-emp/show-emp';
import { FormsModule } from '@angular/forms';
import { NgStyle, NgClass } from '@angular/common';

export interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
  isActive: boolean;
}

@Component({
  selector: 'app-create-emp',
  imports: [ShowEmp, FormsModule, NgStyle, NgClass],
  templateUrl: './create-emp.html',
  styleUrl: './create-emp.css',
})
export class CreateEmp {
  empList: Employee[] = [];
  copyEmpList: Employee[] = [];

  name!: string;
  role: string = 'developer';
  salary!: number | string;
  salaryCheck: boolean = false;
  nameCheck: boolean = false;
  submitBtn: boolean = true;
  selectRole: string = 'all';
  editId : number | null = null;

  copyMainList() {
  this.copyEmpList = [...this.empList];
}

addEmployee(val: number | null = null) {
  console.log(val);

  // This is for sending values in the form fields
  if (val !== null) {
    const findEmp = this.empList.find(emp => emp.id === val);
    if (findEmp) {
      this.name = findEmp.name;
      this.role = findEmp.role;
      this.salary = findEmp.salary;
      this.editId = findEmp.id;
    }
    return;
  } 
  //  This is for updating the particular employee  instead of creating a new or delete the previous one and then create new one
  if(this.editId != null){
    this.empList = this.empList.map((emp) => 
    emp.id == this.editId ? {...emp, name: this.name, role: this.role, salary: +this.salary} : emp)
  }
  // This is for creating new employee
  else {
    const obj: Employee = {
      id: Date.now(),
      name: this.name,
      role: this.role,
      salary: +this.salary,
      isActive: true
    };

    console.log(obj);

    this.empList.push(obj);
  }

  // Reset form
  this.name = '';
  this.salary = '';
  this.role = 'developer';
  this.salaryCheck = true;
  
  this.copyMainList();
}

  validateForm() {
    let sal = +this.salary;

    const invalidName = this.name.trim().length <= 0;
    const invalidSalary = isNaN(sal) || sal <= 0;

    this.nameCheck = invalidName;
    this.salaryCheck = invalidSalary;

    this.submitBtn = invalidName || invalidSalary;
  }

  totalActiveEmployees() {
    return this.empList.filter((emp) => emp.isActive).length;
  }

  // ? Used this method if you're going with employee's index
  deleteEmplyye(id: number) {
    this.empList.splice(id, 1);
    this.copyMainList();
  }

  // ? Used this method if you're going with employee's id
  // deleteEmplyye(id :number){
  //   this.empList = this.empList.filter((emp) => emp.id !== id)
  // this.copyMainList()
  // }

  filterEmployee(Val: string) {
    let searchVal = Val.toLowerCase().trim();
    if (searchVal == 'all') {
      this.copyEmpList = [...this.empList];
    } else {
      this.copyEmpList = this.empList.filter((emp) => {
        return (
          emp.name.toLowerCase().includes(searchVal) || emp.role.toLowerCase().includes(searchVal)
        );
      });
    }

    console.log(this.copyEmpList);
  }
}
