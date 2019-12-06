import { WEATHER } from '../types/weather'
import ReactAnimatedWeather from 'react-animated-weather';
import React from 'react';

const WeatherCard = (props: any) => {
  console.log(props.weatherData)

  const getIcone = (weatherType) => {
    switch (weatherType) {
      case WEATHER.CLOUDS:
        return ('CLOUDY')
      default:
        return ''
    }
  }
  const defaults = {
    icon: getIcone(props.weatherData && props.weatherData.weather[0].main),
    color: 'goldenrod',
    size: 512,
    animate: true
  };

  return (
    <ReactAnimatedWeather
      icon={defaults.icon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  )
}
export default WeatherCard;
