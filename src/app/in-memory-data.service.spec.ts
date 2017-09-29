import { TestBed, inject } from '@angular/core/testing';

import { InMemeoryDataService } from './in-memory-data.service';

describe('InMemeoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemeoryDataService]
    });
  });

  it('should be created', inject([InMemeoryDataService], (service: InMemeoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
