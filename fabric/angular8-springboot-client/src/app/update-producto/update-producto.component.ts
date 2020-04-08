import { Component, OnInit } from "@angular/core";

import { Producto } from "../producto";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductoService } from "../producto.service";
@Component({
  selector: "app-update-producto",
  templateUrl: "./update-producto.component.html",
  styleUrls: ["./update-producto.component.css"],
})
export class UpdateProductoComponent implements OnInit {
  id: number;
  producto: Producto;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    this.producto = new Producto();

    this.id = this.route.snapshot.params["id"];

    this.productoService.getProducto(this.id)
      .subscribe(data => {
        console.log(data)
        this.producto = data;
      }, error => console.log(error));
  }

  updateProducto() {
    this.productoService.updateProducto(this.id, this.producto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.producto = new Producto();
    this.gotoList();
  }

  onSubmit() {
    this.updateProducto();
  }

  gotoList() {
    this.router.navigate(['/productos']);
  }
}
