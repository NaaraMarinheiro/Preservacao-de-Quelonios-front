import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViagemItemComponent } from './viagem-item.component';

describe('ViagemItemComponent', () => {
  let component: ViagemItemComponent;
  let fixture: ComponentFixture<ViagemItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViagemItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViagemItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
