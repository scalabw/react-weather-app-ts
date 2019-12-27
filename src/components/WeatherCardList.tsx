import React from 'react';
import {
  Card,
  Col,
  Row,
  CardHeader
} from "shards-react";

// Import Components
import WeatherCard from './WeatherCard';

// Import Constants
import { Days } from '../constants/days';

// Import Helpers
import { checkEndOfDay } from '../helpers/time';

// Import Types
import { IWeatherForecastListItem } from '../types/weather';

// Items per Raw
const itemInRawLength = 4;

interface IProps {
  weatherDataList: IWeatherForecastListItem[]
}

// this component render all the weather informations provided by the API for a given time
const WeatherCardList = (props: IProps) => {

  const { weatherDataList } = props;

  // Props required to render the reactAnimatedWeather Component
  const renderWeatherCards = (list: IWeatherForecastListItem[] = []) => {
    const fiveDays: JSX.Element[] = [];
    let row: JSX.Element[] = [];
    let daily: JSX.Element[] = [];


    for (let index = 0; index < list.length; index++) {
      const isLastWeatherForecastOfDay = checkEndOfDay(new Date(list[index].dt_txt));

      daily.push(<Col key={`Col-${index}`}>
        <WeatherCard weatherData={list[index]} />
      </Col>)
      if (daily.length === itemInRawLength || isLastWeatherForecastOfDay) {
        row.push(<Row key={`Row-${index}`}>{daily}</Row>)
        daily = []
      }
      if (isLastWeatherForecastOfDay) {
        fiveDays.push(<Card className="mt-2 mb-2 w-100" style={{ opacity: 0.89 }} key={`Card-${index}`}> <CardHeader><h2>{Days[fiveDays.length]}</h2></CardHeader>{row}</Card>)
        row = []
      }
    }
    return fiveDays
  }

  return (
    <>
      {renderWeatherCards(weatherDataList)}
    </>
  )
}
export default WeatherCardList;
