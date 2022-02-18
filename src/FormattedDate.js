import React from "react";

export default function FormattedDate(props) {
  let date = props.date.getDate();
  let hours = props.date.getHours();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];

  let currentDate = `${day}, ${month} ${date}`;
  let currentTime = `Last updated: ${hours}:${minutes} ${ampm}`;

  return (
    <div className="FormattedDate">
      <div>{currentDate}</div>
      <div>{currentTime}</div>
    </div>
  );
}
