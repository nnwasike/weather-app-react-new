import React from "react";
import "./ForecastData.css";

export default function ForecastData(props) {
  let hiTemp = Math.round(props.data.temp.max);
  let lowTemp = Math.round(props.data.temp.min);
  let description = props.data.weather[0].description;
  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastData">
      <div className="weekday">{day()}</div>
      <div className="icon">
        <img src={icon} alt={description}></img>
      </div>
      <span className="high-temp">{hiTemp}°</span>
      <span className="low-temp">{lowTemp}°</span>
    </div>
  );
}
