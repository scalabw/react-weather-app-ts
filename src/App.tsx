import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "shards-react";
import './App.css';
import { GetData } from './API';
import WeatherCard from './components/WeatherCard';
import { Days } from './constants/days';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState()
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
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        console.error(error)
        setWeatherData({});
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
          setUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${city},fr&APPID=d146d2c1e619c5bd4411afef986e631c&units=metric`)
        }

      >Search</button>
      {isError && <div>City not found</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (<Container className="mt-1">
        <Row>
          {weatherData && weatherData!.list && weatherData.list.map((weatherCardData, index) => (
            <div key={index}>
              {index % 8 === 0 ? <> <h2 className="mt-1 pt-2"> {Days[index / 8]}</h2> <Col sm="12" lg="12" md="12">
                <WeatherCard weatherData={weatherCardData} />
              </Col> </> :
                <div className="pt-5">
                  <Col sm="12" lg="12" md="12" >
                    <WeatherCard weatherData={weatherCardData} />
                  </Col>
                </div>
              }

            </div>
          ))}
        </Row>
      </Container>
        )}
    </div>
  );
}

export default App;
