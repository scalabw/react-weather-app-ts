import axios from "axios";

// API Privided by openweathermap 
export const APIKey: string = "d146d2c1e619c5bd4411afef986e631c";

interface ServerData {
  list: []
}

// Get the data for the 5 next days based on the city queried
export const getFiveDaysWeatherData = (cityName: string): Promise<ServerData> | null => {
  if (cityName)
    return axios.get<ServerData>(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=d146d2c1e619c5bd4411afef986e631c&units=metric`).then(response => {
      return response.data
    })
      .catch(error => {
        throw (error)
      });
  return null
}
