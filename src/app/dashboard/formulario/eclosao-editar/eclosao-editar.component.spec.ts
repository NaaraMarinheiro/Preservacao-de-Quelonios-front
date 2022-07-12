import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclosaoEditarComponent } from './eclosao-editar.component';

describe('EclosaoEditarComponent', () => {
  let component: EclosaoEditarComponent;
  let fixture: ComponentFixture<EclosaoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EclosaoEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EclosaoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
