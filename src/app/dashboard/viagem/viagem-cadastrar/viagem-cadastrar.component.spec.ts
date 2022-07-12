import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViagemCadastrarComponent } from './viagem-cadastrar.component';

describe('ViagemCadastrarComponent', () => {
  let component: ViagemCadastrarComponent;
  let fixture: ComponentFixture<ViagemCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViagemCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViagemCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
