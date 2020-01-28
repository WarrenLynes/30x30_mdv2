import { Component, OnInit } from '@angular/core';
import { AuthService } from '@mdv2/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'mdv2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cars';

  get authenticated() {
    return this.authService.authenticated;
  }

  constructor( private authService: AuthService, private router: Router ) {}

  ngOnInit(): void {
    this.authService.authenticated.subscribe((x) => {
      if(x === true) {
        this.router.navigateByUrl('/');
      }
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
