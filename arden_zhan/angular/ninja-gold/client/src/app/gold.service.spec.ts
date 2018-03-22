import { TestBed, inject } from '@angular/core/testing';

import { GoldService } from './gold.service';

describe('GoldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoldService]
    });
  });

  it('should be created', inject([GoldService], (service: GoldService) => {
    expect(service).toBeTruthy();
  }));
});
