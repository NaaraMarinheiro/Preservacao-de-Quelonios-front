import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioColetaComponent } from './formulario-coleta.component';

describe('FormularioColetaComponent', () => {
  let component: FormularioColetaComponent;
  let fixture: ComponentFixture<FormularioColetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioColetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
