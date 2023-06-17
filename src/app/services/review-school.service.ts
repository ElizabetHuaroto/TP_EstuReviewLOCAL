import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReviewSchool } from '../models/reviewSchool';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const baseUrl = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ReviewSchoolService {
  private url = `${baseUrl}`;
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:8080/api'});
  private listaCambio = new Subject<ReviewSchool[]>
  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    console.log(this.url);
    return this.http.get<ReviewSchool[]> (this.url+"/reviewSchools");
    }
    insert(reviewSchool : ReviewSchool){
      return this.http.post(this.url+"/reviewSchool", reviewSchool);
   }
   listId(id:number){
     return this.http.get<ReviewSchool>(`${this.url+"/reviewSchool"}/${id}`);
   }
   update(aut: ReviewSchool){
     return this.http.put(this.url+"/reviewSchool"+aut.id, aut);
   }
   listSchoolId(id:number){
    return this.http.get<ReviewSchool[]>(`${this.url+"/reviewSchool"}?schoolId=${id}`);
  }

}
