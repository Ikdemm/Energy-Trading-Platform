import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService, UserDetails } from './authentication.service';
import { User } from '../models/user.modal';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
 };
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  uri = 'http://localhost:4000/tec';
  uri2 = 'http://localhost:4000/match';
  uri3 = 'https://localhost:4000/api/users';
  details: UserDetails;
  user: User ;

  constructor(private http: HttpClient, private auth: AuthenticationService ) {}
  

  getAccountBalance(account) {
    return this.http.post(`${this.uri}/getBalanceOf`, JSON.stringify(account), httpOptions);
  }
}

