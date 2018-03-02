import { TestBed, inject } from '@angular/core/testing';

import { TetsServiceService } from './tets-service.service';

describe('TetsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TetsServiceService]
    });
  });

  it('should be created', inject([TetsServiceService], (service: TetsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
