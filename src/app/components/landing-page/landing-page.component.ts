import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { userService } from '../../services/user.service';

@Component({
  standalone: true,
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  private authSub?: Subscription;
  githubBtnLabel: string = 'Sign in with Github'

  constructor(
    public auth: AuthService,
    private userService: userService,
  ) {}

  ngOnInit(): void {
    this.authSub = this.auth.isAuthenticated$.subscribe((isAuth) => {
      this.isLoggedIn = isAuth;
      this.userService.setIsLoggedIn(isAuth);
      this.githubBtnLabel = this.isLoggedIn ? 'You are already signed In' : 'Sign in with Github';
    });

      this.auth.user$.subscribe((user) => {
    this.userService.setUserData(user);
  });
  }

  ngOnDestroy(): void {
    this.authSub?.unsubscribe();
  }

  loginWithGitHub(): void {
    this.auth.loginWithRedirect({
      connection: 'github',
    } as any);
  }
}
