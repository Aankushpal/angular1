import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-api-data-bind',
  imports: [],
  templateUrl: './api-data-bind.html',
  styleUrl: './api-data-bind.css',
})
export class ApiDataBind implements OnChanges {
  @Input() count!: number;
  @Input() count2!: number;
  @Input() count3!: number;

  users: any[] = [];

  constructor(private empsData: UserService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    for (const key in changes) {
      if (key == 'count3') {
        console.log(`previousValue of ${key} =>  ${changes[key].previousValue}`);
        console.log(`currentValue of ${key} =>  ${changes[key].currentValue}`);
        console.log(`firstChange of ${key} => ${changes[key].firstChange}`);
        console.log('\n');
      }
    }
    // ? when you want to select any input manually
    // console.log("previousValue => "+ changes[key].previousValue);
    // console.log("currentValue => " +changes['count'].currentValue);
    // console.log("firstChange => " +changes['count'].firstChange);
  }

  loadUsers() {
    this.empsData.getUsers().subscribe((data) => {
      console.log(data);
    });
  }
}
