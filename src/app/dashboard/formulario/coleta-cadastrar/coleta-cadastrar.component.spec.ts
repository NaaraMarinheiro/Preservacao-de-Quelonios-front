import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColetaCadastrarComponent } from './coleta-cadastrar.component';

describe('ColetaCadastrarComponent', () => {
  let component: ColetaCadastrarComponent;
  let fixture: ComponentFixture<ColetaCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColetaCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColetaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
