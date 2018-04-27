import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {Routes, RouterModule} from '@angular/router';
import { CarComponent } from './car-component/car.component';
import {SideBarComponent} from './side-bar-component/side-bar.component'; 

import { HttpClientModule }   from '@angular/common/http';
import { ManagerComponent } from './manager-component/manager.component';
import { FormsModule }   from '@angular/forms';
import { CarListComponent } from './car-list-component/car-list.component';
const appRoutes: Routes =[  
  { path: 'carlist', component: CarListComponent},
  { path: 'managers', component: ManagerComponent },
  { path: 'car/:id', component: CarComponent },
  { path: 'dashboard', component: SideBarComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  declarations: [
     DashboardComponent,
     CarComponent,
     SideBarComponent,
     ManagerComponent,
     CarListComponent]
})
export class DashboardModule { }
