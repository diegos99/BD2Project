import { Component, OnInit } from '@angular/core';

import { Pedidos } from "../pedidos";
import { ActivatedRoute, Router } from "@angular/router";
import { PedidosService } from "../pedidos.service";
@Component({
  selector: 'app-update-pedidos',
  templateUrl: './update-pedidos.component.html',
  styleUrls: ['./update-pedidos.component.css']
})
export class UpdatePedidosComponent implements OnInit {
  id: number;
  pedido: Pedidos;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pedidoService: PedidosService
  ) {}

  ngOnInit() {
    this.pedido = new Pedidos();

    this.id = this.route.snapshot.params["id"];

    this.pedidoService.getPedido(this.id)
      .subscribe(data => {
        console.log(data)
        this.pedido = data;
      }, error => console.log(error));
  }

  updatePedido() {
    this.pedidoService.updatePedido(this.id, this.pedido)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pedido = new Pedidos();
    this.gotoList();
  }

  onSubmit() {
    this.updatePedido();
  }

  gotoList() {
    this.router.navigate(['/pedido']);
  }
}
