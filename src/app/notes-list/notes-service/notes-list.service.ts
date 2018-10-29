import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Note} from '../note';

@Injectable({
  providedIn: 'root'
})
export class NotesListService {

  constructor() { }

  getNotes(): Observable<Note[]> {
    return of([new Note('Rejected Pdf CISM that embarrassed the team. Saved the honor of the bit team', true),
      new Note(Math.random().toString(36).substring(7), Math.floor(Math.random() * 100) % 2 === 0),
      new Note(Math.random().toString(36).substring(7), Math.floor(Math.random() * 100) % 2 === 0),
      new Note(Math.random().toString(36).substring(7), Math.floor(Math.random() * 100) % 2 === 0),
      new Note(Math.random().toString(36).substring(7), Math.floor(Math.random() * 100) % 2 === 0),
      new Note(Math.random().toString(36).substring(7), Math.floor(Math.random() * 100) % 2 === 0),
      new Note(Math.random().toString(36).substring(7), Math.floor(Math.random() * 100) % 2 === 0),
      new Note(Math.random().toString(36).substring(7), Math.floor(Math.random() * 100) % 2 === 0),
      new Note(Math.random().toString(36).substring(7), Math.floor(Math.random() * 100) % 2 === 0),
      new Note(Math.random().toString(36).substring(7), Math.floor(Math.random() * 100) % 2 === 0),
      new Note(Math.random().toString(36).substring(7), Math.floor(Math.random() * 100) % 2 === 0),
      new Note('Ran a jenkins command without sending an email about it', false)]);
  }
}
