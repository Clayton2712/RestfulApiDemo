import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8081/api/tutorials';
@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(
    private http: HttpClient
    
  ) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  
  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }
}
