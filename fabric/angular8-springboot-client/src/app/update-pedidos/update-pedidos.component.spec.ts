import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePedidosComponent } from './update-pedidos.component';

describe('UpdatePedidosComponent', () => {
  let component: UpdatePedidosComponent;
  let fixture: ComponentFixture<UpdatePedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
