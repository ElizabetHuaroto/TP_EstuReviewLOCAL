import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../models/teacher';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private url = `${baseUrl}`;
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:8080/api'});
  constructor(private http:HttpClient) { }

  list():Observable<any>{
    return this.http.get<Teacher[]>(this.url+"/teacherObtener"); //cambiar variables
  }

  insert(colegio : Teacher){
     return this.http.post(this.url+"/teacherCrear", colegio);
  }
  listId(id:number){
    return this.http.get<Teacher>(`${this.url+"/teachers"}/${id}`);
  }
  update(aut: Teacher){
    return this.http.put(this.url+"/teacherActualizar"+aut.id, aut);
  }
  deleteList(id: any) {
    return this.http.delete<Teacher>(`${this.url+"/teacherBorrar"}/${id}`);
  }
  listTeacherId(id:number){ //QUEJESTO OSEA COMO SE PONEN EN BACK
    return this.http.get<Teacher[]>(`${this.url+"/teachers"}/teacher?teacherId=${id}`);
  }
  listTeacherByName(text:string){
    return this.http.get<Teacher[]>(`${this.url+"/teacherObtener/"}${text}`);
  }
}
