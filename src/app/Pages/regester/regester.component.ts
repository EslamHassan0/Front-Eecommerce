import { Component, OnInit } from '@angular/core';
import { regesterModel } from './regester.Model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent implements OnInit {
 
   
   RegisterForm: FormGroup;
 constructor(private authService: AuthService , private fb: FormBuilder,private router: Router){

 }
  ngOnInit(): void {
     this.initForm();
  }

  onSubmit() {
    if (!this.RegisterForm.valid) {
      return;
    }

    const RegesterData = this.RegisterForm.value

    console.log(RegesterData)


    this.authService.regester(RegesterData).subscribe(
      res => {
        console.log(JSON.stringify(res) )

        this.router.navigate(['Product'])
      }, err => {
        alert("this user not invalid")
      })

  }


  private initForm() {
    this.RegisterForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      fristName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }


}
