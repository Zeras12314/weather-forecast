import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class userService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  constructor() {}

  initAuthUser(auth: AuthService) {
    this.isLoadingSubject.next(true);

    // listen to authentication status
    auth.isAuthenticated$.subscribe((status) => {
      this.setIsLoggedIn(status);
    });

    // listen to user profile
    auth.user$.subscribe((user) => {
      this.setUserData(user);
      this.isLoadingSubject.next(false);
    });
  }

  setIsLoggedIn(status: boolean) {
    this.isLoggedInSubject.next(status);
  }

  setUserData(user: any) {
    this.userDataSubject.next(user);
  }
}
