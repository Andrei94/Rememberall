import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NotesListComponent } from './notes-list/notes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
