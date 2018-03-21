import { Component, OnInit,Output, Input} from '@angular/core';
import {Car} from '../models/car';
import { Manager } from '../models/manager';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers:[ManagerService]
})
export class StartComponent implements OnInit {
public managers: Manager[] = []

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
  constructor(private managerService: ManagerService) { 
  }
  ngOnInit() {
    this.managerService.getManagers().subscribe(data => this.managers);
    console.table(this.managers);
  }

}
