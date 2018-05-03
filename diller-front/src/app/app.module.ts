import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent} from './components/login-component/login.component';
import { NavBarComponent } from './components/nav-bar-component/nav-bar.component';
import { RegInComponent } from './components/reg-in-component/reg-in.component';

import {DashboardModule} from './dashboard-module/dashboard.module';
import { NotFoundComponent } from './components/not-found-component/not-found.component';
import { ManagerComponent } from './dashboard-module/manager-component/manager.component';
import { DashboardComponent } from './dashboard-module/dashboard-component/dashboard.component';
import { SideBarComponent } from './dashboard-module/side-bar-component/side-bar.component';

const appRoutes: Routes =[
  { path: '', component: NotFoundComponent},
  { path: 'login', component: LoginComponent},
  { path: 'regin', component: RegInComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    DashboardModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    RegInComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
