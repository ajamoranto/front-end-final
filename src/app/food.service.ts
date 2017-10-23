import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestOptions, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { SessionService } from './session.service'




@Injectable()
export class FoodService {

  private baseUrl: string = "https://nameless-inlet-81751.herokuapp.com/api/";
  private updateUrl: string = "https://nameless-inlet-81751.herokuapp.com/api/item";

  constructor(private http: Http, private session: SessionService) { }

  //this method is used when city/address is entered
  getFoodInfo(city, radius): Observable<any> {

    const session = { session: this.session.validate() }

    var url = this.baseUrl + city.replace(/\s/g, '+') + "/" + radius + "/"

    let headers = new Headers({ 'Content-Type': 'application/json' });

    console.log(url)

    return this.http.post(url, session)
      .map(result => {
        return result.json();
      })

  }

  //this method is used when "use my location" is used
  getFoodInfoLocation(coords, radius): Observable<any> {

    const url = this.baseUrl + coords.latitude + "/" + coords.longitude + "/" + radius + "/"
    const session = { session: this.session.validate() }

    return this.http.post(url, session)
      // return this.http.get(url)
      .map(result => result.json())

  }

  //this method is used to get a new dish, hits different endpoint to update
  getNewFood(): Observable<any> {

    const session = { session: this.session.validate() }

    return this.http.post(this.updateUrl, session)
      .map(result => {
        return result.json()
      })

  }

}
