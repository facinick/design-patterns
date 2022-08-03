import WeatherDataSubscriber from '../subscriber/weather_data_subscriber';
import WeatherData from '../weather_data';

import Display from './display';

class Statistics implements Display, WeatherDataSubscriber {
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
      `statistics: ${this.temperature},${this.humidity},${this.pressure}`
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
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }
}

export default Statistics;
