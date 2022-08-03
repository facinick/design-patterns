import CurrentDisplay from './display/current_conditions';
import Forecasts from './display/forecasts';
import { getRandomPositiveIntegerLessThanEqualTo10 } from './utils/numberUtils';
import WeatherData from './weather_data';

function run() {
  const weatherData = new WeatherData();

  // newly created display is already subscribed to weatherdata
  // upon receiving weather data, it'll do what it wants to do
  new CurrentDisplay(weatherData);
  new Forecasts(weatherData);
  // tomorrow a newly created display just needs to be added here

  setInterval(() => {
    weatherData.setMeasurements({
      temperature: getRandomPositiveIntegerLessThanEqualTo10(),
      pressure: getRandomPositiveIntegerLessThanEqualTo10(),
      humidity: getRandomPositiveIntegerLessThanEqualTo10(),
    });
  }, 3000);
}

export default run;
