import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColetaEditarComponent } from './coleta-editar.component';

describe('ColetaEditarComponent', () => {
  let component: ColetaEditarComponent;
  let fixture: ComponentFixture<ColetaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColetaEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColetaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
