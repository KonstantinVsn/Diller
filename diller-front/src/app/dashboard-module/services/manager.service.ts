import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manager } from '../models/manager';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class ManagerService {
  constructor(private http: HttpClient) {

  }
  public baseUrl: string = "http://localhost:14980/api" //14980
  public serviceUrl: string = "/managers"

  // public getManagers(){
  //   let managers =  this.http.get(this.baseUrl + this.serviceUrl)
  //   return managers;
  // }

  public getManager(id:number) {
    let manager = this.http.get(this.baseUrl + this.serviceUrl + '/' + id);
    return manager;
  }

  private extractManager(response: Response){
    let json = response.json()
  }
  getManagers (): Observable<Manager[]> {
    return this.http.get<Manager[]>(this.baseUrl + this.serviceUrl)
      .pipe(
      );
  }
}
