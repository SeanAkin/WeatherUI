import React, {useState} from 'react'
import SearchPrompt from './SearchPrompt';
import WeatherResults from './WeatherResults';
import SearchButton from './SearchButton'; 
import ReactGlobe from 'react-globe';

export const weatherContext = React.createContext();

export default function WeatherContainer() {
  const [weatherData, setWeatherData] = useState([]);
  function updateWeatherData(data) {
    setWeatherData(data);
  }
    
  return (
    <div >
        <weatherContext.Provider value={weatherData}>
            <ReactGlobe
              style={{border:0,outline:0}}
              size={[300, 300]}
              globeOptions={{ enableBackground: false, 
                glowPower: 5, 
                enableClouds: true, 
                ambientLightColor: 'red',
                cloudsOpacity:1,
                glowColor:'orange',
                cloudsSpeed: 1.125,
                enableZoom: true}}
              cameraOptions={{ enableZoom: false }}
            />
            <SearchButton updateWeatherData={updateWeatherData}/>
            {  weatherData.length !== 0 ? <WeatherResults/> : <SearchPrompt/> }
        </weatherContext.Provider>
    </div>
  )
}

