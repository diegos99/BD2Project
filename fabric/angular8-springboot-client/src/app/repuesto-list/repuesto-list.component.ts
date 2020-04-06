import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { RepuestoService } from "../repuesto.service";
import { Repuesto } from "../repuesto";
import { Router } from '@angular/router';
@Component({
  selector: 'app-repuesto-list',
  templateUrl: './repuesto-list.component.html',
  styleUrls: ['./repuesto-list.component.css']
})
export class RepuestoListComponent implements OnInit {
  repuestos: Observable<Repuesto[]>;

  constructor(private repuestoService: RepuestoService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.repuestos = this.repuestoService.getRepuestosList();
  }

  deleteRepuesto(id: number) {
    this.repuestoService.deleteRepuesto(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateRepuesto(id: number){
    this.router.navigate(['updater', id]);
  }

}
