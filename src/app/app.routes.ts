import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' }, // Default to '/home'
  { path: 'landing-page', component: LandingPageComponent}
];
