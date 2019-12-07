import { WEATHER } from '../types/weather'
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
      case WEATHER.CLOUDS:
        return ('CLOUDY')
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
