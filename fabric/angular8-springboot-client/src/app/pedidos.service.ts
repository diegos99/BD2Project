import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private baseUrl = 'http://localhost:8080/api/v1/pedido';

  constructor(private http: HttpClient) { }
  getPedido(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getPedidosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  createPedido(pedido: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, pedido);
  }
  updatePedido(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deletePedido(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
