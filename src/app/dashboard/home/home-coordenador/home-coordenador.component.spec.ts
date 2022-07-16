import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoordenadorComponent } from './home-coordenador.component';

describe('HomeCoordenadorComponent', () => {
  let component: HomeCoordenadorComponent;
  let fixture: ComponentFixture<HomeCoordenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCoordenadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCoordenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
