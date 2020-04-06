import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateRepuestoComponent } from './create-repuesto/create-repuesto.component';
import { RepuestoDetailsComponent } from './repuesto-details/repuesto-details.component';
import { RepuestoListComponent } from './repuesto-list/repuesto-list.component';
import { UpdateRepuestoComponent } from './update-repuesto/update-repuesto.component';
import { CreateProductoComponent } from './create-producto/create-producto.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { UpdateProductoComponent } from './update-producto/update-producto.component';
import { CreatePedidoComponent } from './create-pedido/create-pedido.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    CreateRepuestoComponent,
    RepuestoDetailsComponent,
    RepuestoListComponent,
    UpdateRepuestoComponent,
    CreateProductoComponent,
    ProductoListComponent,
    UpdateProductoComponent,
    CreatePedidoComponent,
    PedidoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
