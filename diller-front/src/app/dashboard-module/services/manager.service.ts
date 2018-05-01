import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Manager } from '../models/manager';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class ManagerService {
  constructor(private http: HttpClient) { }
  public baseUrl: string = "http://localhost:14980/api" //14980
  public serviceUrl: string = "/managers"

  // public getManagers(){
  //   let managers =  this.http.get(this.baseUrl + this.serviceUrl)
  //   return managers;
  // }

  public getManager(id: number) {
    let manager = this.http.get(this.baseUrl + this.serviceUrl + '/' + id);
    return manager;
  }

  private extractManager(response: Response) {
    let json = response.json()
  }
  getManagers(): Observable<Manager[]> {
    return this.http.get<Manager[]>(this.baseUrl + this.serviceUrl)
      .pipe();
  }
  //getManagers() {
    //return this.http.get(this.baseUrl);
  //}

  createManager(manager: Manager) {
    return this.http.post(this.baseUrl, manager);
  }
  updateManager(id: number, manager: Manager) {
    const urlParams = new HttpParams().set("id", id.toString());
    return this.http.put(this.baseUrl, manager, { params: urlParams });
  }
  deleteManager(id: number) {
    const urlParams = new HttpParams().set("id", id.toString());
    return this.http.delete(this.baseUrl, { params: urlParams });
  }
}
