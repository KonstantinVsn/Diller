import { Component, OnInit,Output, Input} from '@angular/core';
import {Car} from '../models/car';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  @Output()
  public carList : Array<Car> = [
    new Car("Mazda",1, 1),
    new Car("Honda",2, 2),
    new Car("Acura",3, 3),
    new Car("Totota",3, 4),
    new Car("Acura",4, 5),
    new Car("Totota",2, 6),
    new Car("Infinity",1,7),
    new Car("Hundai",7, 8)
  ]
  constructor() { 
  }
  ngOnInit() {
    console.table(this.carList);
  }

}
