import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';



interface Response<T> {
  data: AuthResponseData;
}


export interface AuthResponseData {
  email: string
  userName: string;
  token: string;
  roles: string[];
  lastLoginTime: Date;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface RegesterData {
  username: string;
  fristName: string;
  email: string;
  password: string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.baseUrl;


  user = new BehaviorSubject<User | any>(null);

  constructor(private http: HttpClient, private router: Router) { }

   

  login(loginData: LoginData) {
    return this.http
      .post<AuthResponseData>(`${this.url}api/Auth/Login`, loginData)
      .pipe(
        // catchError(this.handleError),
        // map((res: any) => res.data),
        tap((res) => this.handleAuthentication(res))
      );
  }

  
  regester(regesterData: RegesterData) {
    return this.http
      .post<AuthResponseData>(`${this.url}api/Auth/regester`, regesterData)
      .pipe(
        // catchError(this.handleError),
        // map((res: any) => res.data),
        tap((res) => this.handleAuthentication(res))
      );
  }


  autoLogin() {
    const userDataJson = localStorage.getItem('userData');

    if (!userDataJson) {
      return;
    }

    const userData: {
      email: string;
      userName: string;
      token: string;
      roles: string[]
      lastLoginTime: Date
    } = JSON.parse(userDataJson);
    if (!userData) {
      return;
    }

    const loadedUser: User = {
      email: userData.email,
      userName: userData.userName,
      token: userData.token,
      roles: userData.roles,
      lastLoginTime: userData.lastLoginTime,
    }

    if (loadedUser.token) {
      this.user.next(loadedUser);

    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/Login']);

    localStorage.removeItem('userData');
  }


  private handleAuthentication(authData: AuthResponseData) {

    const user: User = {
      email: authData.email,
      userName: authData.userName,
      token: authData.token,
      roles: authData.roles,
      lastLoginTime: authData.lastLoginTime,
    }


    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

}