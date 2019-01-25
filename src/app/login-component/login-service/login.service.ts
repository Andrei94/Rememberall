import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserDetails} from '../user.details';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(userDetails: UserDetails): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: userDetails ? 'Basic ' + btoa(userDetails.username + ':' + userDetails.password) : ''
      })
    };

    return this.http.post<boolean>('http://localhost:8080/login', userDetails, httpOptions);
  }
}
