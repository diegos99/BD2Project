import { Component, OnInit } from '@angular/core';


import { Pedido } from "../pedido";
import { ActivatedRoute, Router } from "@angular/router";
import { PedidoService } from "../pedido.service";
@Component({
  selector: 'app-update-pedido',
  templateUrl: './update-pedido.component.html',
  styleUrls: ['./update-pedido.component.css']
})
export class UpdatePedidoComponent implements OnInit {
  id: number;
  pedido: Pedido;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pedidoService: PedidoService
  ) {}

  ngOnInit() {
    this.pedido = new Pedido();

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
    this.pedido = new Pedido();
    this.gotoList();
  }

  onSubmit() {
    this.updatePedido();
  }

  gotoList() {
    this.router.navigate(['/pedidos']);
  }

}
