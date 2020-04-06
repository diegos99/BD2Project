import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRepuestoComponent } from './update-repuesto.component';

describe('UpdateRepuestoComponent', () => {
  let component: UpdateRepuestoComponent;
  let fixture: ComponentFixture<UpdateRepuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRepuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRepuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
