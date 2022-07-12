import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolturaEditarComponent } from './soltura-editar.component';

describe('SolturaEditarComponent', () => {
  let component: SolturaEditarComponent;
  let fixture: ComponentFixture<SolturaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolturaEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolturaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
