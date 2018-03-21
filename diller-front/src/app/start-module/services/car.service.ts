import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }
  public baseUrl: string = "localhost:14980/api"
  public serviceUrl:string = "/cars"

  getCars(){
    return this.http.get(this.baseUrl+this.serviceUrl)
  }

}
