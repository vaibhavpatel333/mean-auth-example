/***
 * @author : Vaibhav
 * @email  : vaibhavpatel2017@gmail.com
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/**
 * @environment.AUTH_API;
 * This is the Auth api defined in the enviroment files
 */


const AUTH_API = environment.AUTH_API;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(formData:Object): Observable<any> {
    return this.http.post(AUTH_API + 'signup', formData, httpOptions);
  }
}
