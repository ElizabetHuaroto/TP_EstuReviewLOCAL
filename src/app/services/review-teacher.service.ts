import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReviewTeacher } from '../models/reviewTeacher';
const baseUrl = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ReviewTeacherService {

  private url = `${baseUrl}/reviewTeacher`;
private listaCambio = new Subject<ReviewTeacher[]>();

  constructor(private http: HttpClient) { }
  list(): Observable<any>{
    console.log(this.url);
    return this.http.get<ReviewTeacher[]> (this.url);
    }
    insert(reviewSchool : ReviewTeacher){
      return this.http.post(this.url, reviewSchool);
   }
   listId(id:number){
     return this.http.get<ReviewTeacher>(`${this.url}/${id}`);
   }
   update(aut: ReviewTeacher){
     return this.http.put(this.url+"/"+aut.id, aut);
   }
   listTeacherId(id:number){
    return this.http.get<ReviewTeacher[]>(`${this.url}?teacherlId=${id}`);
  }
}
