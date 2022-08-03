import WeatherDataSubscriber from '../subscriber/weather_data_subscriber';
import WeatherData from '../weather_data';

import Display from './display';

class Forecasts implements Display, WeatherDataSubscriber {
  private temperature: number;
  private humidity: number;
  private pressure: number;
  private weatherData: WeatherData;

  id: number;

  constructor(weatherData: WeatherData) {
    this.id = Math.random();
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
    this.weatherData = weatherData;
    this.weatherData.subscribe(this);
  }

  display() {
    console.log(
      `forecast: ${this.temperature},${this.humidity},${this.pressure}`
    );
  }

  update({
    temperature,
    humidity,
    pressure,
  }: {
    temperature: number;
    humidity: number;
    pressure: number;
  }) {
    this.temperature = temperature + 2;
    this.humidity = humidity + 2;
    this.pressure = pressure + 2;
    this.display();
  }
}

export default Forecasts;
