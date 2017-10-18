import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class FoodService {

  private baseUrl: string = "https://nameless-inlet-81751.herokuapp.com/api/";
  private updateUrl: string = "https://nameless-inlet-81751.herokuapp.com/api/item";

  constructor(private http: Http) { }

  //this method is used when city/address is entered
  getFoodInfo(city, radius): Observable<any> {



    var url = this.baseUrl + city.replace(/\s/g, '+') + "/" + radius

    console.log(url)

    //using regex to replace spaces with a + so api request works
    return this.http.get(this.baseUrl + city.replace(/\s/g, '+') + "/" + radius + "/")
      .map(result => {
        return result.json()
      })

  }
  //this method is used when "use my location" is used
  getFoodInfoLocation(coords, radius): Observable<any> {

    var url = this.baseUrl + coords.latitude + "/" + coords.longitude + "/" + radius + "/"

    // console.log(url)

    return this.http.get(url)
      .map(result => {
        return result.json()
      })

  }
  //this method is used to get a new dish, hits different endpoint to update
  getNewFood(): Observable<any> {

    return this.http.get(this.updateUrl)
      .map(result => {
        return result.json()
      })

  }

}
