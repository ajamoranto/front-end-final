import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class FoodService {

  private baseUrl: string = "http://localhost:8080/api/";
  

  constructor(private http: Http) { }

  getFoodInfo(city): Observable<any> {

    return this.http.get(this.baseUrl + city)
      .map(result => {
        return result.json()
      })

  }
}