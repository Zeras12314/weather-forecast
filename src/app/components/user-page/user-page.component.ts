import { Component, OnInit } from '@angular/core';
import { userService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';
import { Router } from '@angular/router';
import { storeService } from '../../services/store.service';
import { AuthService } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { User } from '../../models/user.model';
import { ForecastData } from '../../models/forecast-data.model';

@Component({
  standalone: true,
  selector: 'app-user-page',
  imports: [CommonModule, FormsModule, LoadingSpinnerComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent implements OnInit {
  city = '';
  forecastData?: ForecastData;
  loading = false;
  errorMessage = '';

  constructor(
    public userService: userService,
    private weatherService: WeatherService,
    private router: Router,
    private store: storeService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  validateAndNavigate(): void {
    if (!this.city.trim()) {
      this.errorMessage = 'Please enter a city name.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.weatherService.getCurrentWeatherByCity(this.city).subscribe({
      next: (data) => {
        this.loading = false;
        this.store.setWeatherData(data);
        this.router.navigate(['/weather-data']);
      },
      error: () => {
        this.errorMessage = 'City not found or invalid. Please try again.';
        this.loading = false;
      },
    });
  }

  logout(): void {
    this.auth.logout({ returnTo: document.location.origin } as any);
  }
}
