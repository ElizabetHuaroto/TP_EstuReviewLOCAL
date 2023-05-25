import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = `${baseUrl}/signin`;
  constructor(private http:HttpClient) {
  }
  inicio( user:Object ){
return this.http.post(this.url, user);
  }
}
