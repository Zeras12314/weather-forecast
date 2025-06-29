import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { WeatherDataComponent } from './components/weather-data/weather-data.component';
import { UserPageComponent } from './components/user-page/user-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'user-page', component: UserPageComponent },
  { path: 'weather-data', component: WeatherDataComponent },
];
