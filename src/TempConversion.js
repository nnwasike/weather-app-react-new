import React, { useState } from "react";
import "./TempConversion.css";

export default function TempConversion(props) {
  const [unit, setUnit] = useState(`fahrenheit`);

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit(`celsius`);
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit(`fahrenheit`);
  }

  if (unit === `fahrenheit`) {
    return (
      <div className="TempConversion">
        <span className="temp">{props.fahrenheit}° </span>
        <span className="tempConversionLinks">
          <strong>F</strong> |{" "}
          <a href="/" onClick={convertToCelsius}>
            C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = Math.round(((props.fahrenheit - 32) * 5) / 9);
    return (
      <div className="TempConversion">
        <span className="temp">{celsius}° </span>
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
