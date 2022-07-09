import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSolturaComponent } from './formulario-soltura.component';

describe('FormularioSolturaComponent', () => {
  let component: FormularioSolturaComponent;
  let fixture: ComponentFixture<FormularioSolturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSolturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSolturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
