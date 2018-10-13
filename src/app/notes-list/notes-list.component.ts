import {Component, OnInit} from '@angular/core';
import {Note} from './note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[];

  constructor() {
  }

  ngOnInit() {
    this.notes = [new Note('Rejected Pdf CISM that embarrassed the team. Saved the honor of the bit team', true),
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
      new Note('Ran a jenkins command without sending an email about it', false)];
  }

}
