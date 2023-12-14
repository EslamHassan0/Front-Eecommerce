import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../shared/auth.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuthenticated: boolean;
  loginForm: FormGroup;


  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    const loginData = this.loginForm.value

    console.log(loginData)


    this.authService.login(loginData).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['Product'])
      }, err => {
        alert("this user not invalid")
      })

  }


  getErrorMessage() {
    if (this.loginForm.value.userName.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.value.userName.hasError('UserName') ? 'Not a valid UserName' : '';
  }



  private initForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }
}
