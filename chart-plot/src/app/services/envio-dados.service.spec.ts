import { TestBed } from '@angular/core/testing';

import { EnvioDadosService } from './envio-dados.service';

describe('EnvioDadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvioDadosService = TestBed.get(EnvioDadosService);
    expect(service).toBeTruthy();
  });
});
