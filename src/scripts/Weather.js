export class Weather {
  constructor(city) {
    this.apikey = "3f70215c2c6a89d705213653d63b6e1a";
    this.city = city;
  }

  async getWeather() {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apikey}&units=metric`;
    const response = await fetch(URL);
    const weatherData = await response.json();
    return weatherData;
  }

  changeLocation(city) {
    this.city = city;
  }
}
