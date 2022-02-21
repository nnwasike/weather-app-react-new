import axios from "axios";
import React from "react";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  function showForecastData(response) {
    console.log(response);
  }

  const apiKey = `db0acb1fc2ef7da0ca0dee51db450339`;
  let units = `imperial`;
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showForecastData);

  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div className="weekday">Mon</div>
          <div className="icon">Icon</div>
          <span className="high-temp">19°</span>
          <span className="low-temp">10°</span>
        </div>
      </div>
    </div>
  );
}
