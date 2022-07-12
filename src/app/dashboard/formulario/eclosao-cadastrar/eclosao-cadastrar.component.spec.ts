import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclosaoCadastrarComponent } from './eclosao-cadastrar.component';

describe('EclosaoCadastrarComponent', () => {
  let component: EclosaoCadastrarComponent;
  let fixture: ComponentFixture<EclosaoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EclosaoCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EclosaoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
