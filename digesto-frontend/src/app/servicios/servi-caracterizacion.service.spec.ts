import { TestBed } from '@angular/core/testing';

import { ServiCaracterizacionService } from './servi-caracterizacion.service';

describe('ServiCaracterizacionService', () => {
  let service: ServiCaracterizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiCaracterizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
