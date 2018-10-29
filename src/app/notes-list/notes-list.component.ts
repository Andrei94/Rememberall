import {Component, OnInit} from '@angular/core';
import {Note} from './note';
import {NotesListService} from './notes-service/notes-list.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[];

  constructor(private notesService: NotesListService) {
  }

  ngOnInit() {
    this.notesService.getNotes().subscribe(notes => this.notes = notes);
  }
}
