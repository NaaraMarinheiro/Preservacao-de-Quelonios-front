import { TestBed } from '@angular/core/testing';

import { EclosaoService } from './eclosao.service';

describe('EclosaoService', () => {
  let service: EclosaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EclosaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
