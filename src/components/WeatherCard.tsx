import ReactAnimatedWeather from 'react-animated-weather';
import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
} from "shards-react";

// Imports Helpers
import { getFormatedHourAndMinutedFromDate } from '../helpers/time';
import { getWeatherIcone } from '../helpers/weather';

// Imports Types
import { IWeatherForecastListItem } from '../types/weather';

interface IProps {
  weatherData: IWeatherForecastListItem
}

// this component render all the weather informations provided by the API for a given time
const WeatherCard = (props: IProps) => {

  // Props required to render the reactAnimatedWeather Component
  const reactAnimatedWeatherProps = {
    icon: getWeatherIcone(props.weatherData && props.weatherData.weather[0].main),
    color: 'black',
    size: 120,
    animate: true
  };

  const { weatherData } = props;
  return (
    <>
      {(weatherData ? <Card className="mt-2 mr-2 ml-2 mb-2 " style={{ height: "22em" }} >
        <CardBody >
          <CardTitle>
            <p>{`${getFormatedHourAndMinutedFromDate(new Date(weatherData.dt_txt))}`}</p>
          </CardTitle>
          <ReactAnimatedWeather
            icon={reactAnimatedWeatherProps.icon}
            color={reactAnimatedWeatherProps.color}
            size={reactAnimatedWeatherProps.size}
            animate={reactAnimatedWeatherProps.animate}
          />
          <p>{weatherData.weather[0].description}
            <br />
            {`Temperature: ${weatherData.main.temp}°C`}
            <br />
            {`Humidity: ${weatherData.main.humidity}%`}
            <br />
            {weatherData.rain ? `Rain: ${weatherData.rain['3h']}mm` : null}
            <br />
          </p>
        </CardBody>
      </Card > : null)
      }
    </>
  )
}
export default WeatherCard;
