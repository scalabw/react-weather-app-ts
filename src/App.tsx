import React, { useState, useEffect } from 'react';
import './App.css';
import { GetData } from './API';
import WeatherCard from './components/WeatherCard';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState('Paris');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const data = await GetData(url);
        setWeatherData(data);
      } catch (error) {
        console.log(error)
        setWeatherData(null);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return (
    <div className="App">
      <input
        type="text"
        value={city}
        onChange={event => setCity(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`http://api.openweathermap.org/data/2.5/weather?q=${city},fr&APPID=d146d2c1e619c5bd4411afef986e631c`)
        }
      ></button>
      {isError && <div>City not found</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <>
            <p>{JSON.stringify(weatherData)}</p>
            <WeatherCard weatherData={weatherData} />
          </>
        )}
    </div>
  );
}

export default App;
