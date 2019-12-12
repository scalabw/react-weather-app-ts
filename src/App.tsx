import React, { useState, useEffect } from 'react';
import { Container, Row, Col, FormInput, Button, Card, CardHeader } from "shards-react";
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
        setWeatherData(data);
      } catch (error) {
        setWeatherData({});
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  const renderWeather = (list) => {
    const fiveDays: any[] = [];
    let row: any[] = [];
    let daily: any[] = [];

    for (let i = 0; i < list.length; i++) {
      daily.push(<Col >
        <WeatherCard weatherData={list[i]} />
      </Col>)
      if (daily.length === 4) {
        row.push(<Row>{daily}</Row>)
        daily = []
      }
      if (row.length === 2) {
        fiveDays.push(<Card className="mt-2 mb-2 w-100" style={{ opacity: 0.89 }}> <CardHeader><h2>{Days[fiveDays.length]}</h2></CardHeader>{row}</Card>)
        row = []
      }
    }
    return fiveDays
  }

  return (
    <div className="App bg-gradient-info">
      <Container className="w-25">
        <FormInput placeholder="City Name" className="mb-2 pt-2" type="text"
          value={city}
          onChange={event => setCity(event.target.value)}
          style={{ opacity: 0.89 }}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              setUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=d146d2c1e619c5bd4411afef986e631c&units=metric`)
            }
          }}
        />

        <Button
          type="button"
          onClick={() =>
            setUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=d146d2c1e619c5bd4411afef986e631c&units=metric`)
          }

        >Search</Button>
      </Container>
      {
        !weatherData && <Container className="bg-gradient-info" style={{ height: '100px' }} />
      }
      {isError && <Card className="mt-2 mb-2 " style={{ opacity: 0.89 }}> <CardHeader><h2>City not found</h2></CardHeader></Card>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (<Container className="mt-1 pb-2 h-100">
        <Row>
          {weatherData && weatherData!.list && renderWeather(weatherData.list)}
        </Row>
      </Container>
        )}
    </div >
  );
}

export default App;
