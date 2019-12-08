import { APIWEATHER, ICONEWEATHER } from '../types/weather'
import ReactAnimatedWeather from 'react-animated-weather';
import React from 'react';
import {
  Card,
  //CardHeader,
  //CardTitle,
  //CardImg,
  CardBody,
  //CardFooter,
  //Button,
  Container,
  Row,
  Col

} from "shards-react";

const WeatherCard = (props: any) => {

  const getIcone = (weatherType) => {
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
    icon: getIcone(props.weatherData && props.weatherData.weather[0].main),
    color: 'black',
    size: 150,
    animate: true
  };
  const { weatherData } = props
  return (
    <Container >
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          {(weatherData ? <Card style={{
          }}>
            <CardBody>
              <p>{weatherData.name}</p>
              <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
              />
              <p>{weatherData.weather[0].description}</p>

            </CardBody>
          </Card > : null)}
        </Col>
      </Row>
    </Container>
  )
}
export default WeatherCard;
