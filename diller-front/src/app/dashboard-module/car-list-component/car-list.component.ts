import { Component, OnInit, Output } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Output()
  public carList : Array<Car> = [
    {name:"Mazda", stars: 1,id: 1},
    {name:"Honda", stars: 2,id: 2},
    {name:"Acura", stars: 1,id: 3},
    {name:"Totota", stars: 4,id: 4},
    {name:"Infinity", stars: 5,id: 5},
    {name:"Infinity", stars: 5,id: 5},
    {name:"Infinity", stars: 5,id: 5},
    {name:"Infinity", stars: 5,id: 5},
    {name:"Infinity", stars: 5,id: 5},
    {name:"Infinity", stars: 5,id: 5},
    {name:"Infinity", stars: 5,id: 5},
    {name:"Infinity", stars: 5,id: 5},
    {name:"Infinity", stars: 5,id: 5},
    {name:"Infinity", stars: 5,id: 5},
    {name:"Infinity", stars: 5,id: 5},
  ]
  constructor() { }

  ngOnInit() {
  }

}
