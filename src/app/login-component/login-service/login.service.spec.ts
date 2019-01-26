import {TestBed, inject, async} from '@angular/core/testing';

import {LoginService} from './login.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UserDetails} from '../user.details';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', async(inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  })));

  it('should login user "user" with password "password"',
    async(inject([HttpClient, HttpTestingController, LoginService],
      (http: HttpClient, httpMock: HttpTestingController, loginService: LoginService) => {
        loginService.login(new UserDetails('user', 'password')).subscribe(value =>
          expect(value).toBeTruthy()
        );

        const req = httpMock.expectOne(environment.loginUrl);
        expect(req.request.method).toEqual('POST');
        expect(req.request.headers.get('Authorization')).toBe('Basic dXNlcjpwYXNzd29yZA==');

        req.flush('true');
      })));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
