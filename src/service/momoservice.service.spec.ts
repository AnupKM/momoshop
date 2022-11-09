import { TestBed } from '@angular/core/testing';

import { MomoserviceService } from './momoservice.service';

describe('MomoserviceService', () => {
  let service: MomoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
