import axios from "axios";
import React, { useState, useEffect } from "react";
import ForecastData from "./ForecastData";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [dailyForecast, setDailyForecast] = useState(null);

  function showForecastData(response) {
    //console.log(response);
    setDailyForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DailyForecast">
        <div className="row">
          {dailyForecast.map(function (fiveDayForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastData data={fiveDayForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = `e89a996efc6b0f8c9cefca057fa123ce`;
    let units = `imperial`;
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showForecastData);
    return null;
  }
}
