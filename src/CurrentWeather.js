import React from "react";
import FormattedDate from "./FormattedDate";
import TempConversion from "./TempConversion";
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
      <div className="row mt-3">
        <div className="col-sm">
          <div className="float icon">
            <WeatherIcons code={props.data.icon} size={70} />
          </div>
          <div className="float">
            <div className="temp-unit">
              <span className="temp">{props.data.temperature} </span>
              <span className="fahrenheit">°F</span>
            </div>
            <TempConversion fahrenheit={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
