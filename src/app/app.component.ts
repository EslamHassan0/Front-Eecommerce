import { Component, OnInit } from '@angular/core';

import { AuthService } from './shared/auth.service';
import { Subscription } from 'rxjs';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-commerce';
  userName: string

  isAuthenticated = false;
  private userSub: Subscription

  constructor(private authService: AuthService , public responsive: BreakpointObserver) { }


  ngOnInit() {
    this.authService.autoLogin();

    this.userSub = this.authService.user.subscribe((user) => {
      console.log(user);
      this.isAuthenticated = !!user;

      if (this.isAuthenticated) {
        this.userName = user.userName;
      }
    });


    this.responsive
    .observe([Breakpoints.Small,Breakpoints.XSmall])
    .subscribe((state:BreakpointState)=>{
      if(state.matches){

        console.log(
          'This is the Handset Portrait point at max-width: 599.98 px and portrait orientation.'
          );
      }
    })
  }


  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
