import ReactAnimatedWeather from 'react-animated-weather';
import React from 'react';
import {
  Card,
  CardTitle,
  //CardImg,
  CardBody,
  //CardFooter,
  //Button,
} from "shards-react";
import { addZero } from '../helpers/time';
import { getWeatherIcone } from '../helpers/weather';

const WeatherCard = (props: any) => {



  const defaults = {
    icon: getWeatherIcone(props.weatherData && props.weatherData.weather[0].main),
    color: 'black',
    size: 80,
    animate: true
  };


  const { weatherData } = props;
  return (
    <  >

      {(weatherData ? <Card className="mt-3 mr-4" >
        <CardBody >
          <CardTitle>
            <p>{`${addZero(new Date(weatherData.dt_txt).getHours())}:${addZero(new Date(weatherData.dt_txt).getMinutes())}`}</p>
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
