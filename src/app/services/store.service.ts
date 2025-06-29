import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class storeService {
  private _weatherData: any = null;

  constructor() {}

  setWeatherData(data: any): void {
    this._weatherData = data;
  }

  getWeatherData(): any {
    return this._weatherData;
  }

  clearWeatherData(): void {
    this._weatherData = null;
  }
}
