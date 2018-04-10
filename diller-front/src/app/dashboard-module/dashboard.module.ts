import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {Routes, RouterModule} from '@angular/router';
import { CarComponent } from './car-component/car.component';
import {SideBarComponent} from './side-bar-component/side-bar.component'; 

import { HttpClientModule }   from '@angular/common/http';

const appRoutes: Routes =[
  { path: 'dashboard', component: DashboardComponent},
  { path: 'car/:id', component: CarComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
     DashboardComponent,
     CarComponent,
     SideBarComponent]
})
export class DashboardModule { }
