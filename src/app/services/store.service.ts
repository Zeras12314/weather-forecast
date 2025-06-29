import { Injectable } from '@angular/core';
import { ForecastData } from '../models/forecast-data.model';

@Injectable({
  providedIn: 'root',
})
export class storeService {
  private _weatherData: any = null;

  constructor() {}

  setWeatherData(data: ForecastData): void {
    this._weatherData = data;
  }

  getWeatherData(): ForecastData {
    return this._weatherData;
  }

  clearWeatherData(): void {
    this._weatherData = null;
  }
}
