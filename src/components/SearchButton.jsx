import React from "react";
import { weatherApiUrl } from "../util";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchButton({ updateWeatherData }) {
  const [location, setLocation] = useState("London");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchWeatherData();
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      if(location.length > 0){
        const response = await axios.get(
          `${weatherApiUrl}WeatherForecast/GetByLocation?location=${location}`
        );
        updateWeatherData(response.data);
      }
    } catch (error) {
    }
  };
  
  return (
    <div>
      <input type="text" className="App-search" placeholder="London" onChange={(e) => setLocation(e.target.value)} onKeyDown={handleKeyPress}></input>
      <button className="App-button" onClick={fetchWeatherData}>Search</button>
    </div>
  );
}
