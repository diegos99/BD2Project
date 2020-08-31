import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { RepueService } from "../repue.service";

import { Router } from "@angular/router";
import { Repuesto } from '../repue';

@Component({
  selector: 'app-repue-list',
  templateUrl: './repue-list.component.html',
  styleUrls: ['./repue-list.component.css']
})
export class RepueListComponent implements OnInit {
  repue: Observable<Repuesto[]>;
  /* vehiculos: Observable<Vehiculos[]>; */
  constructor(
    private productoService: RepueService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.repue = this.productoService.getRepuestosList();
  }

  deleteProducto(id: number) {
    this.productoService.deleteProducto(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  updateProducto(id: number) {
    this.router.navigate(['updateprod', id]);
  }
}
