import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Venta2ListComponent } from './venta2-list.component';

describe('Venta2ListComponent', () => {
  let component: Venta2ListComponent;
  let fixture: ComponentFixture<Venta2ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Venta2ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Venta2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
