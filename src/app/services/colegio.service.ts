import { Colegio } from './../models/colegio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseUrl = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ColegioService {
  private url = `${baseUrl}/colegios`;//alt+96

  constructor(private http:HttpClient) { } //inyectar httpClient

  list():Observable<any>{
    return this.http.get<Colegio[]>(this.url); //
  }

  insert(colegio : Colegio){
     return this.http.post(this.url, colegio);
  }
  listId(id:number){
    return this.http.get<Colegio>(`${this.url}/${id}`);
  }
  update(aut: Colegio){
    return this.http.put(this.url+"/"+aut.id, aut);
  }
  deleteList(id: any) {
    return this.http.delete<Colegio>(`${this.url}/${id}`);
  }
}
