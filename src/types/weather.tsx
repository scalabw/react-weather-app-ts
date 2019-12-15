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

export interface WeatherData {
  dt: number;
  dt_txt: string;
}