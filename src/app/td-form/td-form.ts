import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  imports: [FormsModule, NgStyle],
  templateUrl: './td-form.html',
  styleUrl: './td-form.css',
})
export class TdForm {
    onSubmit(formVal : any){
      console.log(formVal)
      console.log(formVal.value)
    }
}
