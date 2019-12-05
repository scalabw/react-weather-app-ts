import React, { useState, useEffect } from 'react';
import './App.css';
import { GetData } from './API';

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
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          weatherData && <p>{JSON.stringify(weatherData)}</p>
        )}
    </div>
  );
}

export default App;
