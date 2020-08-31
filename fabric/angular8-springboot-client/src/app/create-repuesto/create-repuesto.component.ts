import { Component, OnInit } from '@angular/core';


import { RepuestoService } from '../repuesto.service';
import { Repuesto } from '../repuesto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-repuesto',
  templateUrl: './create-repuesto.component.html',
  styleUrls: ['./create-repuesto.component.css']
})
export class CreateRepuestoComponent implements OnInit {

  repuesto: Repuesto = new Repuesto();
  submitted = false;

  constructor(private repuestoService: RepuestoService,
              private router: Router) { }

  ngOnInit() {
  }

  newRepuesto(): void {
    this.submitted = false;
    this.repuesto = new Repuesto();
  }

  save() {
    this.repuestoService.createRepuesto(this.repuesto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.repuesto = new Repuesto();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/repuestos']);
  }

}
