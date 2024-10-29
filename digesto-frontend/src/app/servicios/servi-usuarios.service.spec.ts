import { TestBed } from '@angular/core/testing';

import { ServiUsuariosService } from './servi-usuarios.service';

describe('ServiUsuariosService', () => {
  let service: ServiUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
