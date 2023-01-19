import '../App.css';
import React from 'react'
import { weatherContext } from './WeatherContainer'

export default function WeatherResults() {
    const weatherData = React.useContext(weatherContext)
  return (
    <div className='App-paragraph'>
          <p>Location: {weatherData.location}</p>
          <p>Max Temp: {weatherData.maxTemp} °C</p>
          <p>Min Temp: {weatherData.minTemp} °C</p>
          <p>Temperature: {weatherData.temperature} °C</p>
          <p>Pressure: {weatherData.pressure} hPa</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Sunrise: {weatherData.sunrise}</p>
          <p>Sunset: {weatherData.sunset}</p>
    </div>
  )
}
