import { Component } from '@angular/core';
import { storeService } from '../../services/store.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ForecastData } from '../../models/forecast-data.model';

@Component({
  standalone: true,
  selector: 'app-weather-data',
  imports: [DatePipe],
  templateUrl: './weather-data.component.html',
  styleUrl: './weather-data.component.scss',
})
export class WeatherDataComponent {
  forecastData?: ForecastData;
  errorMessage = '';
  today = new Date();
  forecastTempFahrenheit?: number;

  constructor(private store: storeService, private router: Router) {}

  ngOnInit(): void {
    
    this.forecastData = this.store.getWeatherData() as ForecastData;

    if (!this.forecastData) {
      this.errorMessage = 'No weather data found. Please search again.';
    } else {
      // Convert temperature to Fahrenheit when data is available
      const celsius = this.forecastData.main?.temp;
      if (celsius !== undefined) {
        this.forecastTempFahrenheit = this.convertCtoF(celsius);
      }
    }
  }

  convertCtoF(celsius: number): number {
    return Math.round((celsius * 9) / 5 + 32);
  }

  goBackToProfile(): void {
    this.router.navigate(['/user-page']);
  }
}
