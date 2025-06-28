import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  private authSub?: Subscription;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.authSub = this.auth.isAuthenticated$.subscribe(
      (isAuth) => this.isLoggedIn = isAuth
    );
  }

  ngOnDestroy(): void {
    this.authSub?.unsubscribe();
  }

  loginWithGitHub(): void {
    this.auth.loginWithRedirect({
      connection: 'github', // ⬅️ This tells Auth0 to use the GitHub social connection
    } as any);
  }

  logout(): void {
    this.auth.logout({ returnTo: document.location.origin } as any);
  }
}
