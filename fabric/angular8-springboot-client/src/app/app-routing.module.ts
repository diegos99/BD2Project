import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

import { CreateRepuestoComponent } from './create-repuesto/create-repuesto.component';
import { RepuestoListComponent } from './repuesto-list/repuesto-list.component';
import { UpdateRepuestoComponent } from './update-repuesto/update-repuesto.component';

import { CreateProductoComponent } from './create-producto/create-producto.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { UpdateProductoComponent } from './update-producto/update-producto.component';

import { CreatePedidoComponent } from './create-pedido/create-pedido.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { UpdatePedidoComponent } from './update-pedido/update-pedido.component';

import { PedidosListComponent } from './pedidos-list/pedidos-list.component';
import { UpdatePedidosComponent } from './update-pedidos/update-pedidos.component';
import { CreatePedidosComponent } from './create-pedidos/create-pedidos.component';

import { VentasListComponent } from './ventas-list/ventas-list.component';
import { Venta2ListComponent } from './venta2-list/venta2-list.component';
import { RepueListComponent } from './repue-list/repue-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'fabrica1/employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },

  { path: 'fabrica2/employees', component: RepuestoListComponent },
  { path: 'addr', component: CreateRepuestoComponent },
  { path: 'updater/:id', component: UpdateRepuestoComponent },

  { path: 'fabrica1/productos', component: ProductoListComponent },
  { path: 'addprod', component: CreateProductoComponent },
  { path: 'updateprod/:id', component: UpdateProductoComponent },
  
  { path: 'fabrica2/productos', component: RepueListComponent },

  { path: 'fabrica2/pedido', component: PedidoListComponent },
  { path: 'addped', component: CreatePedidoComponent },
  { path: 'updateped/:id', component: UpdatePedidoComponent },

  { path: 'fabrica1/pedido', component: PedidosListComponent },
  { path: 'addpedido', component: CreatePedidosComponent },
  { path: 'updatepedido/:id', component: UpdatePedidosComponent },

  { path: 'fabrica1/ventas', component: VentasListComponent },
  { path: 'fabrica2/ventas', component: Venta2ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
