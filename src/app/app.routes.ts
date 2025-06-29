import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { WeatherDataComponent } from './components/weather-data/weather-data.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'user-page', component: UserPageComponent, canActivate: [AuthGuard] },
  {
    path: 'weather-data',
    component: WeatherDataComponent,
    canActivate: [AuthGuard],
  },
];
