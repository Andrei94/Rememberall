import { TestBed, inject } from '@angular/core/testing';

import { RemarksListService } from './remarks-list.service';

describe('RemarksListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemarksListService]
    });
  });

  it('should be created', inject([RemarksListService], (service: RemarksListService) => {
    expect(service).toBeTruthy();
  }));
});
