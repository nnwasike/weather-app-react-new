import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1 className="text-capitalize">{props.data.city}</h1>
      <div className="row">
        <div className="col-sm">
          <FormattedDate date={props.data.date} />
          <div className="text-capitalize">{props.data.description}</div>
        </div>
        <div className="col-sm">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
      <div className="row mt-3 mb-2">
        <div className="col-sm offset-sm-3">
          <div className="float icon">
            <WeatherIcons code={props.data.icon} size={70} />
          </div>
          <div className="float">
            <div className="temp-unit">
              <span className="temp">{props.data.temperature} </span>
              <span className="fahrenheit">°F</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
