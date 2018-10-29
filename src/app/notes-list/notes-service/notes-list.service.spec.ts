import { TestBed, inject } from '@angular/core/testing';

import { NotesListService } from './notes-list.service';

describe('NotesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesListService]
    });
  });

  it('should be created', inject([NotesListService], (service: NotesListService) => {
    expect(service).toBeTruthy();
  }));
});
