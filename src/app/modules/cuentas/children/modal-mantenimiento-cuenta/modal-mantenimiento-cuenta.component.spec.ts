import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMantenimientoCuentaComponent } from './modal-mantenimiento-cuenta.component';

describe('ModalMantenimientoCuentaComponent', () => {
  let component: ModalMantenimientoCuentaComponent;
  let fixture: ComponentFixture<ModalMantenimientoCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMantenimientoCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMantenimientoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
