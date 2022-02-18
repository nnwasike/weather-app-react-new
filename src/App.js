import React from "react";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App shadow-sm">
        <Search defaultCity="New York" />
      </div>
      <footer>
        <a
          href="https://github.com/nnwasike/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        {""} by {""}
        <a
          href="https://frosty-noether-fa80c2.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Nwakego Nwasike
        </a>
      </footer>
    </div>
  );
}

export default App;
