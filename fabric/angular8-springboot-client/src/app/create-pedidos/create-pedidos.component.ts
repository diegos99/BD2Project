import { Component, OnInit } from '@angular/core';

import { PedidosService } from '../pedidos.service';
import { Pedidos } from '../pedidos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-pedidos',
  templateUrl: './create-pedidos.component.html',
  styleUrls: ['./create-pedidos.component.css']
})
export class CreatePedidosComponent implements OnInit {
  pedido: Pedidos = new Pedidos();
  submitted = false;

  constructor(private pedidoService: PedidosService,
              private router: Router) { }

  ngOnInit() {
  }

  newPedido(): void {
    this.submitted = false;
    this.pedido = new Pedidos();
  }

  save() {
    this.pedidoService.createPedido(this.pedido)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pedido = new Pedidos();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/addpedido']);
  }
}
