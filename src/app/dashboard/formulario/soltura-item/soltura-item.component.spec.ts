import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolturaItemComponent } from './soltura-item.component';

describe('SolturaItemComponent', () => {
  let component: SolturaItemComponent;
  let fixture: ComponentFixture<SolturaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolturaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolturaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
