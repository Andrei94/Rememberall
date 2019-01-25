import {Component, OnInit} from '@angular/core';
import {Remark} from './remark';
import {RemarksListService} from './remarks-service/remarks-list.service';

@Component({
  selector: 'app-remarks-list',
  templateUrl: './remarks-list.component.html',
  styleUrls: ['./remarks-list.component.css']
})
export class RemarksListComponent implements OnInit {
  remarks: Remark[];

  constructor(private remarksListService: RemarksListService) {
  }

  ngOnInit(): void {
    this.remarksListService.getRemarks().subscribe(remarks => this.remarks = remarks);
  }
}
