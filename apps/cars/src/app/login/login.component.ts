import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '@mdv2/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'mdv2-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.buildForm();
  }

  ngOnInit() {
    this.authService.authenticated.subscribe((x) => {
      if(x === true) {
        this.router.navigateByUrl('/');
      }
    });
  }

  buildForm() {
    this.loginForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl('')
    })
  }

  submit() {
    this.authService.authenticate(this.loginForm.value);
  }

}
