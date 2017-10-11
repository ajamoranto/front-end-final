import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class FoodService {

  private baseUrl: string = "https://polar-tundra-24242.herokuapp.com/api/";
  private updateUrl: string = "https://polar-tundra-24242.herokuapp.com/api/item";
  
  constructor(private http: Http) { }

  getFoodInfo(city): Observable<any> {

    return this.http.get(this.baseUrl + city)
      .map(result => {
        return result.json()
      })

  }

  getNewFood(city): Observable<any> {
    
    return this.http.get(this.updateUrl)
      .map(result => {
        return result.json()
      })
    
  }

}
