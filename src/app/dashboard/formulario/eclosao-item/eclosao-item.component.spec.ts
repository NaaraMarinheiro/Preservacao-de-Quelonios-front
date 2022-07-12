import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclosaoItemComponent } from './eclosao-item.component';

describe('EclosaoItemComponent', () => {
  let component: EclosaoItemComponent;
  let fixture: ComponentFixture<EclosaoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EclosaoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EclosaoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
