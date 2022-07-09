import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEclosaoComponent } from './formulario-eclosao.component';

describe('FormularioEclosaoComponent', () => {
  let component: FormularioEclosaoComponent;
  let fixture: ComponentFixture<FormularioEclosaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEclosaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEclosaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
