import { TestBed } from '@angular/core/testing';

import { SmsEnvioService } from './sms-envio.service';

describe('SmsEnvioService', () => {
  let service: SmsEnvioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsEnvioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
