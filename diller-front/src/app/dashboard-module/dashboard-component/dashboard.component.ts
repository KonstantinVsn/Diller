import { Component, OnInit,Output, Input} from '@angular/core';
import {Car} from '../models/car';
import { Manager } from '../models/manager';
import { ManagerService } from '../services/manager.service';
import { Observable } from 'rxjs/Observable';

import {SideBarComponent} from '../side-bar-component/side-bar.component'; 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[ManagerService]
})
export class DashboardComponent implements OnInit {
public managers: Manager[]
public manager: Manager
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
    this.managerService.getManager(1)
    .subscribe(manager => this.manager = manager)
    this.getMangers()
    debugger;
    console.log("1 "+this.manager);
    console.table("many "+this.managers);
  }

  getMangers():void{
    this.managerService.getManagers()
    .subscribe(managers => {this.managers = managers
    console.log(this.managers);
    });

  }
  
  
}
