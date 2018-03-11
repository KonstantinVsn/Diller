import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent} from './login-component/login.component';
import { NavBarComponent } from './nav-bar-component/nav-bar.component';
import { RegInComponent } from './reg-in-component/reg-in.component';

import {StartModule} from './start-module/start.module';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes =[
  { path: '', component: NotFoundComponent},
  { path: 'login', component: LoginComponent},
  { path: 'regin', component: RegInComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    RegInComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    StartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
