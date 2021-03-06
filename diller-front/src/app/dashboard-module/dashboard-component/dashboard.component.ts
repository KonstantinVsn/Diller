import { Component, OnInit,Output, Input} from '@angular/core';
import {Car} from '../models/car';
import { Manager } from '../models/manager';
import { ManagerService } from '../services/manager.service';
import { Observable } from 'rxjs/Observable';

import {SideBarComponent} from '../side-bar-component/side-bar.component'; 
@Component({
  selector: 'app-dashboard',
  template: `<app-side-bar></app-side-bar>`,
  styleUrls: ['./dashboard.component.css'],
  providers:[ManagerService]
})
export class DashboardComponent implements OnInit {
public managers: Manager[]
public manager: Manager
  
  constructor(private managerService: ManagerService) { 
  }
  ngOnInit() {
    //this.managerService.getManager(1)
    //.subscribe(manager => this.manager = manager)
    //this.getMangers()
    //debugger;
    //console.log("1 "+this.manager);
    //console.table("many "+this.managers);
  }

  getMangers():void{
    //his.managerService.getManagers()
    //.subscribe(managers => {this.managers = managers
    //console.log(this.managers);
    //});

  }
  
  
}
