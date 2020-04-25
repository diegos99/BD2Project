import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { PedidosService } from "../pedidos.service";
import { Pedidos } from "../pedidos";
import { Router } from '@angular/router';
@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {
  pedidos: Observable<Pedidos[]>;

  constructor(private pedidoService: PedidosService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.pedidos = this.pedidoService.getPedidosList();
  }

  updatePedido(id: number){
    this.router.navigate(['updatepedido', id]);
  }

  deletePedido(id: number) {
    this.pedidoService.deletePedido(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
