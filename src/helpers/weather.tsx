import { APIWEATHER, ICONEWEATHER } from '../types/weather'

export const getWeatherIcone = (weatherType) => {
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