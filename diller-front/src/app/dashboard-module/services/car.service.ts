import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Car } from '../models/car';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }
  public baseUrl: string = "http://localhost:14980/api"
  public serviceUrl:string = "/cars"

  onInit(){
   
  }

  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl + this.serviceUrl)
      .pipe();
  }
}
