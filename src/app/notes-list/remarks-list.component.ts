import {Component, OnInit} from '@angular/core';
import {Remark} from './remark';
import {RemarksListService} from './remarks-service/remarks-list.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './remarks-list.component.html',
  styleUrls: ['./remarks-list.component.css']
})
export class RemarksListComponent implements OnInit {
  remarks: Remark[];

  constructor(private notesService: RemarksListService) {
  }

  ngOnInit() {
    this.notesService.getNotes().subscribe(remarks => this.remarks = remarks);
  }
}
