import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloCadastrarComponent } from './ciclo-cadastrar.component';

describe('CicloCadastrarComponent', () => {
  let component: CicloCadastrarComponent;
  let fixture: ComponentFixture<CicloCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicloCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
