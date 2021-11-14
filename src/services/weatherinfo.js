import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const getWeather = (cityName) => {
  const currentUrl = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  const request = axios.get(currentUrl);
  return request.then((response) => {
    return response.data;
  });
};

export default getWeather;
