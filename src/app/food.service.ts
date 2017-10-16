import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class FoodService {

  private baseUrl: string = "https://sheltered-refuge-69690.herokuapp.com/api/";
  private updateUrl: string = "https://sheltered-refuge-69690.herokuapp.com/api/item";
  
  constructor(private http: Http) { }

  getFoodInfo(city, radius): Observable<any> {

    var url = this.baseUrl + city +"/"+ radius
    
    // console.log(url)
    

    return this.http.get(this.baseUrl + city + "/" +radius + "/")
      .map(result => {
        return result.json()
      })

  }

  getFoodInfoLocation(coords, radius): Observable<any> {

    var url = this.baseUrl + coords.latitude +"/"+ coords.longitude +"/"+ radius

      // console.log(url)
    
      return this.http.get(url)
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
