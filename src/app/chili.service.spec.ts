import { TestBed, inject } from '@angular/core/testing';

import { ChiliService } from './chili.service';

describe('ChiliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChiliService]
    });
  });

  it('should be created', inject([ChiliService], (service: ChiliService) => {
    expect(service).toBeTruthy();
  }));
});
