import { TestBed } from '@angular/core/testing';

import { GeneratecertificateService } from './generatecertificate.service';

describe('GeneratecertificateService', () => {
  let service: GeneratecertificateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratecertificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
