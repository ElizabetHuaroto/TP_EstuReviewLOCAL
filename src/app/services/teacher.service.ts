import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../models/teacher';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private url = `${baseUrl}/teachers`;

  constructor(private http:HttpClient) { }

  list():Observable<any>{
    return this.http.get<Teacher[]>(this.url); //cambiar variables
  }

  insert(colegio : Teacher){
     return this.http.post(this.url, colegio);
  }
  listId(id:number){
    return this.http.get<Teacher>(`${this.url}/${id}`);
  }
  update(aut: Teacher){
    return this.http.put(this.url+"/"+aut.id, aut);
  }
  deleteList(id: any) {
    return this.http.delete<Teacher>(`${this.url}/${id}`);
  }
}
