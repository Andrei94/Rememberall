import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Remark} from '../remark';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RemarksListService {

  constructor(private http: HttpClient) {
  }

  getNotes(): Observable<Remark[]> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get('http://ec2-3-83-24-127.compute-1.amazonaws.com/allRemarks', httpOptions)
      .pipe(map((r: any) => r.remarks as Remark[]));
  }
}
