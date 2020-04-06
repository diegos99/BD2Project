import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestoDetailsComponent } from './repuesto-details.component';

describe('RepuestoDetailsComponent', () => {
  let component: RepuestoDetailsComponent;
  let fixture: ComponentFixture<RepuestoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepuestoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
