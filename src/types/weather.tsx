export enum APIWEATHER {
  CLOUDS = "Clouds",
  THUNDERSTORM = "Thunderstorm",
  DRIZZLE = "Drizzle",
  RAIN = "Rain",
  SNOW = "Snow",
  MIST = "Mist",
  SMOKE = "Smoke",
  HAZE = "Haze",
  DUST = "Dust",
  FOG = "Fog",
  SAND = "Sand",
  ASH = "Ash",
  SQUALL = "Squall",
  TORNADO = "Tornado",
  CLEAR = "Clear",
}

export enum ICONEWEATHER {
  CLEARDAY = "CLEAR_DAY",
  CLEARNIGHT = "CLEAR_NIGHT",
  PARTLY_CLOUDY_DAY = "PARTLY_CLOUDY_DAY",
  PARTLY_CLOUDY_NIGHT = "PARTLY_CLOUDY_NIGHT",
  CLOUDY = "CLOUDY",
  RAIN = "RAIN",
  SLEET = "SLEET",
  SNOW = "SNOW",
  WIND = "WIND",
  FOG = "FOG"
}


export interface IWeatherType {
  id: number,
  main: string,
  description: string,
  icon: string
}

export interface IWeatherForecastListItem {
  dt: string,
  dt_txt: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  }
  weather: IWeatherType[],
  clouds: { all: number },
  wind: { speed: number, deg: number }
  rain: { "3h": number },

}

export interface ICity {
  id: number,
  name: string,
  coord: {
    lat: any,
    lon: any
  },
  country: string,
  population: number,
  timezone: number,
  sunrise: number,
  sunset: number
}

export interface IWeatherData {
  cod: string,
  list: IWeatherForecastListItem[],
  message: number,
  city: ICity
}