import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksListComponent } from './remarks-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RemarksListComponent', () => {
  let component: RemarksListComponent;
  let fixture: ComponentFixture<RemarksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemarksListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
    expect(component.remarks).toBeUndefined();
  }));
});
