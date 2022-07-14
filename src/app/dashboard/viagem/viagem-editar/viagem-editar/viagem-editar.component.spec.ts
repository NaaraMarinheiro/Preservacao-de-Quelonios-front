import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViagemEditarComponent } from './viagem-editar.component';

describe('ViagemEditarComponent', () => {
  let component: ViagemEditarComponent;
  let fixture: ComponentFixture<ViagemEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViagemEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViagemEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
