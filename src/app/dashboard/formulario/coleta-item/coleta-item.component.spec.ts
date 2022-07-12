import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColetaItemComponent } from './coleta-item.component';

describe('ColetaItemComponent', () => {
  let component: ColetaItemComponent;
  let fixture: ComponentFixture<ColetaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColetaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColetaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
