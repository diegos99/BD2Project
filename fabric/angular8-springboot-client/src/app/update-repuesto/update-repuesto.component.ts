import { Component, OnInit } from '@angular/core';

import { Repuesto } from '../repuesto';
import { ActivatedRoute, Router } from '@angular/router';
import { RepuestoService } from '../repuesto.service';
@Component({
  selector: 'app-update-repuesto',
  templateUrl: './update-repuesto.component.html',
  styleUrls: ['./update-repuesto.component.css']
})
export class UpdateRepuestoComponent implements OnInit {

  id: number;
  repuesto: Repuesto;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private repuestoService: RepuestoService) { }

  ngOnInit() {
    this.repuesto = new Repuesto();

    this.id = this.route.snapshot.params['id'];

    this.repuestoService.getRepuesto(this.id)
      .subscribe(data => {
        console.log(data)
        this.repuesto = data;
      }, error => console.log(error));
  }

  updateRepuesto() {
    this.repuestoService.updateRepuesto(this.id, this.repuesto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.repuesto = new Repuesto();
    this.gotoList();
  }

  onSubmit() {
    this.updateRepuesto();
  }

  gotoList() {
    this.router.navigate(['/repuestos']);
  }
}
