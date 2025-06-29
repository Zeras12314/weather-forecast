import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class userService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private userDataSubject = new BehaviorSubject<User | null>(null);
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
      this.setUserData(user ?? null);
      this.isLoadingSubject.next(false);
    });
  }

  setIsLoggedIn(status: boolean) {
    this.isLoggedInSubject.next(status);
  }

  setUserData(user: User | null): void {
    this.userDataSubject.next(user);
  }
}
