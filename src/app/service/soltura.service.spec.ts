import { TestBed } from '@angular/core/testing';

import { SolturaService } from './soltura.service';

describe('SolturaService', () => {
  let service: SolturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
