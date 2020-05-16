import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private baseUrl = 'http://127.0.0.1:8000/factura/buscar_facturas?id=';
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

  getVentasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}