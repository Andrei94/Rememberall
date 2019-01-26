import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {routes} from '../app.module';
import {RemarksListComponent} from '../remarks-list/remarks-list.component';
import {mockSessionStorage} from '../mock-session-storage';
import {LoginService} from './login-service/login.service';
import {of} from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        RemarksListComponent
      ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        RouterTestingModule.withRoutes(routes)]
    }).compileComponents();

    router = TestBed.get(Router);
    spyOn(sessionStorage, 'getItem').and.callFake(mockSessionStorage.getItem);
    spyOn(sessionStorage, 'setItem').and.callFake(mockSessionStorage.setItem);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should navigate to /allRemarks', async(inject([LoginService],
    (service: LoginService) => {

      const loginSpy = spyOn(service, 'login').and.returnValue(of(true));
      const routerSpy = spyOn(router, 'navigateByUrl');

      component.checkLogin();

      expect(loginSpy).toHaveBeenCalled();
      expect(component.successfulLogin).toBe(true);
      expect(routerSpy.calls.first().args[0]).toBe('/allRemarks');
    })));

  it('should fail the login', async(inject([LoginService], (service: LoginService) => {

    const loginSpy = spyOn(service, 'login').and.returnValue(of(false));
    const routerSpy = spyOn(router, 'navigateByUrl');

    component.checkLogin();

    expect(loginSpy).toHaveBeenCalled();
    expect(component.successfulLogin).toBe(false);
    expect(routerSpy.calls.count()).toBe(0);
  })));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
