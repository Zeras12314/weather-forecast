export interface WeatherMain {
  temp?: number;
  pressure?: number;
  humidity?: number;
}

export interface WeatherDescription {
  main?: string;
  description?: string;
}

export interface ForecastData {
  name?: string;
  main: WeatherMain;
  weather: WeatherDescription[];
  wind: {
    speed: number;
  };
}
