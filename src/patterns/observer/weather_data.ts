import WeatherDataPublisher from './publisher/weather_data_publisher';
import WeatherDataSubscriber from './subscriber/weather_data_subscriber';
import { Humidity, Pressure, Temperature } from './types/weather_data_types';

class WeatherData implements WeatherDataPublisher {
  private temperature: Temperature;
  private pressure: Pressure;
  private humidity: Humidity;
  private changed: boolean;

  private subscribersList: Array<WeatherDataSubscriber>;

  constructor() {
    this.subscribersList = [];
    this.temperature = 0;
    this.pressure = 0;
    this.humidity = 0;
    this.changed = false;
  }

  setChanged(changed: boolean) {
    this.changed = changed;
  }

  getChanged() {
    return this.changed;
  }

  hasChanged() {
    return this.changed === true;
  }

  subscribe(weatherDataSubscriber: WeatherDataSubscriber) {
    this.subscribersList.push(weatherDataSubscriber);
    console.log(`added new subscriber: ${weatherDataSubscriber.id}`);
  }

  unsubscribe(weatherDataSubscriber: WeatherDataSubscriber) {
    this.subscribersList.filter(
      (subscriber) => subscriber.id === weatherDataSubscriber.id
    );
    console.log(`removed subscriber: ${weatherDataSubscriber.id}`);
  }

  // should this be public?
  notifySubscribers() {
    if (this.hasChanged()) {
      this.subscribersList.forEach((subscriber) => {
        subscriber.update({
          temperature: this.temperature,
          pressure: this.pressure,
          humidity: this.humidity,
        });
      });
      this.setChanged(false);
    }
  }

  private measurementsChanged() {
    this.setChanged(true);
    this.notifySubscribers();
  }

  public setMeasurements({
    temperature,
    pressure,
    humidity,
  }: {
    temperature: Temperature;
    pressure: Pressure;
    humidity: Humidity;
  }) {
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;

    this.measurementsChanged();
  }
}

export default WeatherData;
