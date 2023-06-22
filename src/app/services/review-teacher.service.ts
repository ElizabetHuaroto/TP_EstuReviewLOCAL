import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReviewTeacher } from '../models/reviewTeacher';
const baseUrl = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ReviewTeacherService {

  private url = `${baseUrl}`;
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:8080/api'});
private listaCambio = new Subject<ReviewTeacher[]>();

  constructor(private http: HttpClient) { }
  list(): Observable<any>{
    console.log(this.url);
    return this.http.get<ReviewTeacher[]> (this.url+"/reviewTeachers");
    }
    insert(reviewSchool : ReviewTeacher){
      return this.http.post(this.url+"/reviewTeacherCrear", reviewSchool);
   }
   listId(id:number){
     return this.http.get<ReviewTeacher>(`${this.url+"/reviewTeacherCodigo"}/${id}`);
   }
   update(aut: ReviewTeacher){
     return this.http.put(this.url+"/reviewTeacherActualizar"+aut.id, aut);
   }
   listTeacherId(id:number){ //PREGUNTARRRR
    return this.http.get<ReviewTeacher[]>(`${this.url+"/reviewTeacherslISTA"}/${id}`);
  }
}
///${id}`
