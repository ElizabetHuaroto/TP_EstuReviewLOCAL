import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReviewSchool } from '../models/reviewSchool';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const baseUrl = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ReviewSchoolService {
  private url = `${baseUrl}/reviewSchool`;
  private listaCambio = new Subject<ReviewSchool[]>
  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    console.log(this.url);
    return this.http.get<ReviewSchool[]> (this.url);
    }
    insert(reviewSchool : ReviewSchool){
      return this.http.post(this.url, reviewSchool);
   }
   listId(id:number){
     return this.http.get<ReviewSchool>(`${this.url}/${id}`);
   }
   update(aut: ReviewSchool){
     return this.http.put(this.url+"/"+aut.id, aut);
   }


}
