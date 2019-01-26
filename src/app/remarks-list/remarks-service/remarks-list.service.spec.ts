import {async, inject, TestBed} from '@angular/core/testing';

import {RemarksListService} from './remarks-list.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Remark} from '../remark';
import {environment} from '../../../environments/environment';
import {mockSessionStorage} from '../../mock-session-storage';

describe('RemarksListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    spyOn(sessionStorage, 'getItem').and.callFake(mockSessionStorage.getItem);
    spyOn(sessionStorage, 'setItem').and.callFake(mockSessionStorage.setItem);
  });

  it('should be created', async(inject([RemarksListService], (service: RemarksListService) => {
    expect(service).toBeTruthy();
  })));

  it('should throw with an error message when API returns an error',
    async(inject([HttpClient, HttpTestingController, RemarksListService],
      (http: HttpClient, httpMock: HttpTestingController, remarksListService: RemarksListService) => {
        remarksListService.getRemarks().subscribe(
          () => fail('should fail with 500 status'),
          (error: HttpErrorResponse) => {
            expect(error).toBeTruthy();
            expect(error.status).toEqual(500);
          }
        );

        const req = httpMock.expectOne(environment.allRemarksUrl);
        expect(req.request.method).toBe('GET');

        req.flush({errorMessage: 'Uh oh!'}, {status: 500, statusText: 'Server Error'});
      })));

  it('returns 2 remarks',
    async(inject([HttpClient, HttpTestingController, RemarksListService],
      (http: HttpClient, httpMock: HttpTestingController, remarksListService: RemarksListService) => {
        sessionStorage.setItem('Authorization', 'Basic authorization');
        remarksListService.getRemarks().subscribe(
          actualRemarks => {
            expect(actualRemarks).toBeDefined();
            expect(actualRemarks.length).toBe(2);
          },
        );

        const req = httpMock.expectOne(environment.allRemarksUrl);
        expect(req.request.method).toEqual('GET');
        expect(req.request.headers.get('Authorization')).toBe('Basic authorization');
        req.flush({
          remarks: [
            new Remark('dasdassad', 'positive'),
            new Remark('hdjashdjaskd', 'negative')
          ]
        });
      })));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
