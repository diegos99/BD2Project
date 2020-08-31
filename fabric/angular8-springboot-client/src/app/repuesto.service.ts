import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RepuestoService {
  private baseUrl = 'http://localhost:8090/api/v1/employees';
  constructor(private http: HttpClient) { }

  getRepuesto(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRepuesto(repuesto: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, repuesto);
  }

  updateRepuesto(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRepuesto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getRepuestosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
