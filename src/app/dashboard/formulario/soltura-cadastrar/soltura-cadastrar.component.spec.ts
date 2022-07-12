import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolturaCadastrarComponent } from './soltura-cadastrar.component';

describe('SolturaCadastrarComponent', () => {
  let component: SolturaCadastrarComponent;
  let fixture: ComponentFixture<SolturaCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolturaCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolturaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
