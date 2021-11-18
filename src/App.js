import React, { useState } from "react";
import axios from "axios";
import WeatherForm from "./components/WeatherForm";
import CurrentWeather from "./components/CurrentWeather";
import ForecastCard from "./components/ForecastCard";
import ErrorMessage from "./components/ErrorMessage";

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [cityName, setCityName] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState({
    description: "",
    city: "",
    country: "",
    temperature: "",
    icon: "",
    windSpeed: "",
    humidity: "",
    pressure: "",
  });
  const [forecastData, setForecastData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [renderData, setRenderData] = useState(false);
  const [fade, setFade] = useState(false);

  //function for getting current weather
  const getWeather = (cityName) => {
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    axios
      .get(currentUrl)
      .then((response) => {
        //console.log(response);
        setErrorMessage(null);
        setCurrentWeatherData({
          description: response.data.weather[0].description,
          city: response.data.name + ",",
          country: response.data.sys.country,
          temperature: Math.round(response.data.main.temp) + " °C",
          icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`,
          windSpeed:
            "Wind speed: " + Math.round(response.data.wind.speed) + " m/s",
          humidity: "Humidity: " + response.data.main.humidity + " %",
          pressure: "Pressure: " + response.data.main.pressure + " hPa",
        });
      })
      .catch((error) => {
        if (cityName === "") {
          setErrorMessage(`The search field is empty!`);
        } else {
          setErrorMessage(`Weather data for ${cityName} cannot be found!`);
        }
        setRenderData(false);
        setCurrentWeatherData({});
        setForecastData([]);
      });
  };

  //function for getting forecast data
  const getForecast = (cityName) => {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=10&appid=${API_KEY}&units=metric`;
    axios.get(forecastUrl).then((response) => {
      //console.log(response.data.list);
      setForecastData(response.data.list);
    });
  };

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setFade(true);
    setRenderData(true);
    getWeather(cityName);
    getForecast(cityName);
    setTimeout(() => {
      //set fade to false, so that the fade animation happens everytime when a search is done
      setFade(false);
    }, 2000);
  };

  return (
    <div className="text-indigo-900">
      <WeatherForm
        searchCity={handleSearch}
        cityName={cityName}
        handleChange={handleChange}
      />
      <div className={fade ? "animate-fade" : ""}>
        <ErrorMessage message={errorMessage} />
        {renderData ? (
          <CurrentWeather
            description={currentWeatherData.description}
            city={currentWeatherData.city}
            country={currentWeatherData.country}
            temperature={currentWeatherData.temperature}
            icon={currentWeatherData.icon}
            humidity={currentWeatherData.humidity}
            windSpeed={currentWeatherData.windSpeed}
            pressure={currentWeatherData.pressure}
          />
        ) : (
          ""
        )}
        {renderData ? (
          <div className="flex flex-row space-x-8 justify-center items-center">
            {forecastData.map((card, index) => {
              return (
                <ForecastCard
                  key={index}
                  day={
                    JSON.stringify(new Date(card.dt * 1000).getDate()) +
                    "." +
                    JSON.stringify(new Date(card.dt * 1000).getMonth() + 1)
                  }
                  time={
                    JSON.stringify(new Date(card.dt * 1000).getHours()) + ":00"
                  }
                  icon={`http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`}
                  temperature={
                    Math.round(JSON.stringify(card.main.temp)) + " °C"
                  }
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default App;
