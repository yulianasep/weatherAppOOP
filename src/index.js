import { Weather } from "./scripts/Weather.js";
import { UI } from "./scripts/UI.js";
import { Store } from "./scripts/Store.js";

const store = new Store();
const { city } = store.getLocationData();
const ui = new UI();
const apiWeather = new Weather(city);

async function fetchWeather() {
  const data = await apiWeather.getWeather();
  console.log(data);
  ui.render(data);
}

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const city = document.getElementById("city").value;
  apiWeather.changeLocation(city);
  store.setLocationData(city);
  fetchWeather();
});

document.addEventListener("DOMContentLoaded", fetchWeather);

// capturar ubicacion actual
// enviar al dar enter
// preservar datos en el local storage
// custom errors
