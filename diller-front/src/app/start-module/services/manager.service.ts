import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manager } from '../models/manager';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ManagerService {

  constructor(private http: HttpClient) {

  }
  public baseUrl: string = "http://localhost:14980/api"
  public serviceUrl: string = "/managers"

  getManagers() {
    return this.http.get(this.baseUrl + this.serviceUrl)
  }
}
