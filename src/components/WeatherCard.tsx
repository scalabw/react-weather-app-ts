import ReactAnimatedWeather from 'react-animated-weather';
import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
} from "shards-react";
import { getFormatedHourAndMinutedFromDate } from '../helpers/time';
import { getWeatherIcone } from '../helpers/weather';

const WeatherCard = (props: any) => {

  const defaults = {
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
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
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
