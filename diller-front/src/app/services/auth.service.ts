import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { RegUser } from '../dashboard-module/models/regUser';
import { CONFIG } from '../app.config';

@Injectable()
export class AuthService {
  public baseUrl:string = CONFIG.baseUrl
  constructor(private http: HttpClient) { }


  public createNewUser(newUser: RegUser){
    debugger
    return this.http.post(this.baseUrl + "/api/signin", newUser);
  }
}
