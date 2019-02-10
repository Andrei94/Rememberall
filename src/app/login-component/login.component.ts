import {Component, OnInit} from '@angular/core';
import {LoginService} from './login-service/login.service';
import {UserDetails} from './user.details';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails: UserDetails = new UserDetails('', '');
  successfulLogin: boolean;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  checkLogin(): void {
    this.loginService.login(this.userDetails).subscribe((loginResult: boolean) => {
      this.successfulLogin = loginResult;
      if (this.successfulLogin) {
        sessionStorage.setItem('Authorization', 'Basic ' + btoa(this.userDetails.username + ':' + this.userDetails.password));
        this.router.navigateByUrl('/allRemarks');
      }
    });
  }
}

