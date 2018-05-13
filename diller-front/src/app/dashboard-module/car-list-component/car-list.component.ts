import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';
import { Notify } from '../../shared/notify';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers:[CarService, Notify]
})
export class CarListComponent implements OnInit {
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  @Output()
  public carList : Array<Car>
  constructor(private carService: CarService, private notificator: Notify) { 
    this.carList = new Array<Car>()
  }

  ngOnInit() {
    this.getCars();
  }
  print(){
    console.table(this.carList)
  }

  getCars(){
      this.carService.getCars().subscribe(
        (data: Car[]) =>{
          this.notificator.showSuccessMessage("Cписок обновлен")
          this.carList = data
        },
        err => this.notificator.showError(err),
        () => console.log('Completed'));
  }

  loadTemplate(car: Car) {
      return this.readOnlyTemplate
  }



}
