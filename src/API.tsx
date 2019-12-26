import axios from "axios";
import { IWeatherData } from "./types/weather";

// API Privided by openweathermap 
export const APIKey: string = "d146d2c1e619c5bd4411afef986e631c";

// Get the data for the 5 next days based on the city queried
export const getFiveDaysWeatherData = (cityName: string): Promise<IWeatherData> | null => {
  if (cityName)
    return axios.get<IWeatherData>(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=d146d2c1e619c5bd4411afef986e631c&units=metric`).then(response => {
      return response.data
    })
      .catch(error => {
        throw (error)
      });
  return null
}
