import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloItemComponent } from './ciclo-item.component';

describe('CicloItemComponent', () => {
  let component: CicloItemComponent;
  let fixture: ComponentFixture<CicloItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicloItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
