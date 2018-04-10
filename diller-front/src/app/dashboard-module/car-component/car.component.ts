import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  public id: number
  constructor(private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
