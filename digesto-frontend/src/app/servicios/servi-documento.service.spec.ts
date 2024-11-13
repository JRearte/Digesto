import { TestBed } from '@angular/core/testing';

import { ServiDocumentoService } from './servi-documento.service';

describe('ServiDocumentoService', () => {
  let service: ServiDocumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiDocumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
