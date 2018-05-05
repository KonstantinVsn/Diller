import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { RegUser } from '../dashboard-module/models/regUser';
import { CONFIG } from '../app.config';

import {Observable} from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/Rx'; 

import { BaseService } from './base.service';
import { LoginUser } from '../dashboard-module/models/loginUser';


@Injectable()
export class AuthService extends BaseService{
  public baseUrl:string = CONFIG.baseUrl

  constructor(private http: Http) {
    super();
   }


  public createNewUser(newUser: RegUser){
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.baseUrl + "/api/signin", newUser, {headers: headers})
    .map(res => res.json())
    
  }

  public logIn(loginUser: LoginUser){
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.baseUrl + "/api/auth/login", loginUser, {headers: headers})
  }


  logError(err) {
    console.error('There was an error: ' + err);
  }
}
