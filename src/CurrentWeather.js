import React from "react";
import FormattedDate from "./FormattedDate";
import TempConversion from "./TempConversion";
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
      <div className="row">
        <div className="col-sm-2">
          <img src={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col-sm offset-sm-1">
          <TempConversion fahrenheit={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
