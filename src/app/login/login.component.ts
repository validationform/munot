import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  message = '';
  constructor(private routes: Router, private service: AuthService) {}

  ngOnInit(): void {}
  check(username: string, password: string): void {
    var loginSucess = this.service.checkLogin(username, password);
    if (loginSucess === true) {
      this.routes.navigate(['/home']);
    } else {
      this.message = 'Invalid username or password';
    }
  }
}
