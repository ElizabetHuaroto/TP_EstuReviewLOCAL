import { Colegio } from './../models/colegio';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseUrl = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ColegioService {
  private url = `${baseUrl}`;
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:8080/api'});

  constructor(private http:HttpClient) { } //inyectar httpClient

  list():Observable<any>{
    return this.http.get<Colegio[]>(this.url+"/schools"); //
  }

  insert(colegio : Colegio){
     return this.http.post(this.url+"/school", colegio);
  }
  listId(id:number){
    return this.http.get<Colegio>(`${this.url+"/school"}/${id}`);
  }
  update(aut: Colegio){
    return this.http.put(this.url+"/school"+aut.id, aut);
  }
  deleteList(id: any) {
    return this.http.delete<Colegio>(`${this.url+"/scqhool"}/${id}`);
  }
  listSchoolByName(text:string){
    return this.http.get<Colegio[]>(`${this.url+"/school"}?name_like=${text}`);
  }
}
