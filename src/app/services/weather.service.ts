import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = environment.openWeather.apiKey;
//   private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily';

  constructor(private http: HttpClient) {
  }

   getCoordinatesByCity(city: string, limit: number = 1): Observable<any> {
    const geoUrl = 'https://api.openweathermap.org/geo/1.0/direct';
    const params = new HttpParams()
      .set('q', city)
      .set('limit', limit.toString())
      .set('appid', this.apiKey);

    return this.http.get(geoUrl, { params });
  }

  getForecastByCoordinates(lat: number, lon: number): Observable<any> {
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    const params = new HttpParams()
      .set('lat', lat.toString())
      .set('lon', lon.toString())
      .set('units', 'metric')
      .set('appid', this.apiKey);

    return this.http.get(forecastUrl, { params });
  }

  getCurrentWeatherByCity(city: string): Observable<any> {
  const params = new HttpParams()
    .set('q', city)
    .set('units', 'metric')
    .set('appid', this.apiKey);

  return this.http.get('https://api.openweathermap.org/data/2.5/weather', { params });
}

}
