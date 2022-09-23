import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth';

  constructor(private router: Router) {}

  login(): void {
    this.router.navigate(['/login']);
  }

  home(): void {
    this.router.navigate(['/home']);
  }
}
