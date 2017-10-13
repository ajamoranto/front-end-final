import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class FoodService {

  private baseUrl: string = "https://sheltered-refuge-69690.herokuapp.com/api/";
  private updateUrl: string = "https://sheltered-refuge-69690.herokuapp.com/api/item";
  
  constructor(private http: Http) { }

  getFoodInfo(city): Observable<any> {

    return this.http.get(this.baseUrl + city)
      .map(result => {
        return result.json()
      })

  }

  getFoodInfoLocation(coords): Observable<any> {

    var url = this.baseUrl + coords.latitude.toString() +"/"+ coords.longitude.toString()

        console.log(coords.latitude.toFixed(2) +","+ coords.longitude.toFixed(2))
        console.log(coords.latitude.toString() +","+ coords.longitude.toString())
        console.log(this.baseUrl + coords.latitude +"/"+ coords.longitude)

        console.log("This should be coords: " + coords)
    
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
