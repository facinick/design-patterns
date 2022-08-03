import WeatherDataSubscriber from '../subscriber/weather_data_subscriber';

interface WeatherDataPublisher {
  setChanged: (changed: boolean) => void;
  getChanged: () => boolean;
  subscribe: (weatherDataSubscriber: WeatherDataSubscriber) => void;
  unsubscribe: (weatherDataSubscriber: WeatherDataSubscriber) => void;
  notifySubscribers: () => void;
}

export default WeatherDataPublisher;
