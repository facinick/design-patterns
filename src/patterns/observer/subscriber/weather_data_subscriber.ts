interface WeatherDataSubscriber {
  id: number;
  update: ({
    temperature,
    humidity,
    pressure,
  }: {
    temperature: number;
    humidity: number;
    pressure: number;
  }) => void;
}

export default WeatherDataSubscriber;
