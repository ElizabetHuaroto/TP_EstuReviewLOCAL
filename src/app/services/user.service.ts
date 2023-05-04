import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{ MatTableDataSource } from'@angular/material/table';
import { User } from '../models/user';
const baseUrl = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${baseUrl}/users`;
private listaCambio = new Subject<User[]>();
//CAMBIO NAV
public isEnterSubject = new BehaviorSubject<boolean>(false);
  public isEnter$ = this.isEnterSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  getById(id: number) {
    return this.http.get<User>(this.url + '/' + id);
  }

list():Observable<any>{
console.log(this.url);


return this.http.get<User[]> (this.url);
}

  insert(user:User){
    return this.http.post(this.url,user);
  }
  setList(listaNueva: User[]){
    this.listaCambio.next(listaNueva);
  }
  getlist(){
    this.listaCambio.asObservable();
  }



}
