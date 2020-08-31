import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class ExternalService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments';
  constructor(private http: HttpClient) { }

  getComments(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  post(opost:Posts): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', opost);
  }

}