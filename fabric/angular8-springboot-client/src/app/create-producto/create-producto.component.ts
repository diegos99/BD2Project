import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {
  producto: Producto = new Producto();
  submitted = false;

  constructor(private productoService: ProductoService,
              private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.producto = new Producto();
  }

  save() {
    this.productoService.createProducto(this.producto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.producto = new Producto();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/productos']);
  }

}
