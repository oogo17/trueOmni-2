import { TestBed } from '@angular/core/testing';

import { TrueOmniClientService } from './true-omni-client.service';

describe('TrueOmniClientService', () => {
  let service: TrueOmniClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrueOmniClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
