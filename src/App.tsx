import React, { useState, useEffect } from 'react';
import { Container, Row, FormInput, Card, CardHeader, FormSelect } from "shards-react";

// Import API Calls
import { getFiveDaysWeatherData } from './API';

// Import Components
import WeatherStats from './components/WeathersStats';
import WeatherCardList from './components/WeatherCardList';

// Import CSS files
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

// Select Weather types values
const weatherForecastTypes = ['Weather Forecast', 'Stats']

const App: React.FC = () => {
  const [fiveDaysWeatherData, setFiveDaysWeatherData] = useState()
  const [city, setCity] = useState('Paris');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [weatherForecastType, setWeatherForecastType] = useState(weatherForecastTypes[0])

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const fiveDaysWeatherData = await getFiveDaysWeatherData(city);
        setFiveDaysWeatherData(fiveDaysWeatherData);
        setIsError(false);
      } catch (error) {
        console.error(error)
        setFiveDaysWeatherData({});
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [city]);


  const selectOptions = weatherForecastTypes.map((weatherForecastType, index) => <option value={weatherForecastType} key={index}>{weatherForecastType}</option>)
  const weatherDataList = fiveDaysWeatherData && fiveDaysWeatherData.list;

  return (
    <div className="App bg-gradient-info">
      <Container className="w-25">
        <FormInput placeholder="City Name" className="mb-2 mt-2" type="text"
          value={city}
          onChange={event => setCity(event.target.value)}
          style={{ opacity: 0.89 }}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              setCity(event.target.value)
            }
          }}
        />
        <FormSelect onChange={(e) => setWeatherForecastType(e.target.value)} style={{ opacity: 0.89 }}
        >
          {selectOptions}
        </FormSelect>
      </Container>
      {
        !fiveDaysWeatherData && <Container className="bg-gradient-info" style={{ height: '100px' }} />
      }
      {isError && <Card className="mt-2 mb-2" style={{ opacity: 0.89 }}> <CardHeader><h2>City not found</h2></CardHeader></Card>}
      {isLoading ? (
        <Card className="mt-2 mb-2" style={{ opacity: 0.89 }}> <CardHeader><h2>Loading ...</h2></CardHeader></Card>
      ) : (<Container className="h-100">
        <Row>
          {weatherForecastType === 'Weather Forecast' && <WeatherCardList weatherDataList={weatherDataList} />}
          {weatherForecastType === 'Stats' && <WeatherStats weatherDataList={weatherDataList} />
          }
        </Row >
      </Container>
        )}
    </div >
  );
}

export default App;
