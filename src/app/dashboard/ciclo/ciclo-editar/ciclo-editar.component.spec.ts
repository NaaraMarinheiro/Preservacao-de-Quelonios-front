import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloEditarComponent } from './ciclo-editar.component';

describe('CicloEditarComponent', () => {
  let component: CicloEditarComponent;
  let fixture: ComponentFixture<CicloEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicloEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
