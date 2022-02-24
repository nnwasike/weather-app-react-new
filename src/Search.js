import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function showWeatherData(response) {
    setWeatherData({
      loaded: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSearch() {
    const apiKey = `e89a996efc6b0f8c9cefca057fa123ce`;
    let units = `imperial`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeatherData);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="search-bar-form"
        type="search"
        autoFocus={true}
        placeholder="Find your city..."
        onChange={updateCity}
      ></input>
      <input className="btn btn-dark" type="submit" value="Search"></input>
    </form>
  );

  if (weatherData.loaded) {
    return (
      <div className="Search">
        <div className="row mb-3">{form}</div>
        <CurrentWeather data={weatherData} />
        <DailyForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    handleSearch();
    return (
      <div className="Search">
        <div className="row mb-3">{form}</div>
      </div>
    );
  }
}
