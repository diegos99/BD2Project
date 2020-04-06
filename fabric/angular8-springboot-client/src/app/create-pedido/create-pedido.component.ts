import { Component, OnInit } from '@angular/core';

import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-pedido',
  templateUrl: './create-pedido.component.html',
  styleUrls: ['./create-pedido.component.css']
})
export class CreatePedidoComponent implements OnInit {
  pedido: Pedido = new Pedido();
  submitted = false;

  constructor(private pedidoService: PedidoService,
              private router: Router) { }

  ngOnInit() {
  }

  newPedido(): void {
    this.submitted = false;
    this.pedido = new Pedido();
  }

  save() {
    this.pedidoService.createPedido(this.pedido)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pedido = new Pedido();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/addped']);
  }

}
