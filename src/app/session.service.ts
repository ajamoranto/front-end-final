import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestOptions, Headers } from '@angular/http'

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class SessionService {

  validate() {
    const session = localStorage.getItem('session')
    if (session) {
      return session
    }

    const token = this.random128();
    localStorage.setItem('session', token);
    return token
  }

  /** random 128-bit number as a string */
  random128() {
    var result = "";
    for (var i = 0; i < 8; i++)
      result += Math.random().toString(16).substring(2, 10);
    return result;
  }

}
