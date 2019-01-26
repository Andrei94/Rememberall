import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {LoginComponent} from './login-component/login.component';
import {routes} from './app.module';
import {RemarksListComponent} from './remarks-list/remarks-list.component';
import {FormsModule} from '@angular/forms';
import {Location} from '@angular/common';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RemarksListComponent,
        LoginComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        HttpClientTestingModule
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('navigate to "" redirects you to /login', async(() => {
    router.navigate(['']);
    expect(location.path()).toBe('/login');
  }));
});
