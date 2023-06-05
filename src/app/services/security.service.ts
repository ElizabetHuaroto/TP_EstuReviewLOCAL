import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

const url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  baseUrl: string =  url;
  constructor(private http:HttpClient) {
  }
  login( user:Object ) {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  register(user: User) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
}
