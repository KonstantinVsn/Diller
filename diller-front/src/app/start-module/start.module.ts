import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {Routes, RouterModule} from '@angular/router';
import { CarComponent } from './car/car.component';

const appRoutes: Routes =[
  { path: 'start', component: StartComponent},
  { path: 'car/:id', component: CarComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [StartComponent, CarComponent]
})
export class StartModule { }
