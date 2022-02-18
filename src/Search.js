import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function showWeatherData(response) {
    //console.log(response.data);
    setWeatherData({
      loaded: true,
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
    const apiKey = `db0acb1fc2ef7da0ca0dee51db450339`;
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