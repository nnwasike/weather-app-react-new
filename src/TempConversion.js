import React, { useState } from "react";
import "./TempConversion.css";

export default function TempConversion(props) {
  const [unit, setUnit] = useState(props.fahrenheit);

  function convertToCelsius(event) {
    event.preventDefault();
    let celsius = Math.round(((props.fahrenheit - 32) * 5) / 9);
    setUnit(celsius);
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit(props.fahrenheit);
  }

  if (unit === props.fahrenheit) {
    return (
      <div className="TempConversion">
        <span className="temp">{unit}° </span>
        <span className="tempConversionLinks">
          <strong>F</strong> |{" "}
          <a href="/" onClick={convertToCelsius}>
            C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TempConversion">
        <span className="temp">{unit}° </span>
        <span className="tempConversionLinks">
          <strong>C</strong> |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  }
}
