import { APIWEATHER, ICONEWEATHER } from '../types/weather'
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

const WeatherCard = (props: any) => {

  const getWeatherIcone = (weatherType) => {
    switch (weatherType) {
      case APIWEATHER.CLOUDS:
        return ICONEWEATHER.CLOUDY
      case APIWEATHER.RAIN:
        return ICONEWEATHER.RAIN
      case APIWEATHER.MIST:
      case APIWEATHER.SMOKE:
      case APIWEATHER.HAZE:
      case APIWEATHER.DUST:
      case APIWEATHER.FOG:
      case APIWEATHER.SAND:
      case APIWEATHER.ASH:
        return ICONEWEATHER.FOG
      case APIWEATHER.SQUALL:
        return ICONEWEATHER.WIND
      case APIWEATHER.SNOW:
        return ICONEWEATHER.SNOW
      case APIWEATHER.DRIZZLE:
        return ICONEWEATHER.SLEET
      case APIWEATHER.CLEAR:
        return ICONEWEATHER.CLEARDAY
      default:
        return ''
    }
  }

  const defaults = {
    icon: getWeatherIcone(props.weatherData && props.weatherData.weather[0].main),
    color: 'black',
    size: 80,
    animate: true
  };


  const { weatherData, city } = props;
  console.log(props)
  return (
    <  >
      {(weatherData ? <Card className="mt-4 mr-4" >
        <CardBody>
          <CardTitle>
            <p>{city.name}</p>
          </CardTitle>
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
          <p>{weatherData.weather[0].description}
            <br />
            {weatherData.main.temp}°C</p>
        </CardBody>
      </Card > : null)
      }
    </>
  )
}
export default WeatherCard;
