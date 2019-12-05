import axios from "axios";


export const APIKey: string = "d146d2c1e619c5bd4411afef986e631c";

export const ExampleCall = "http://api.openweathermap.org/data/2.5/weather?q=paris,fr&APPID=d146d2c1e619c5bd4411afef986e631c"

export const ExampleAnswer = { "coord": { "lon": 2.35, "lat": 48.86 }, "weather": [{ "id": 741, "main": "Fog", "description": "fog", "icon": "50n" }], "base": "stations", "main": { "temp": 272.13, "pressure": 1021, "humidity": 92, "temp_min": 271.15, "temp_max": 273.71 }, "visibility": 550, "wind": { "speed": 1.5, "deg": 340 }, "clouds": { "all": 90 }, "dt": 1575499533, "sys": { "type": 1, "id": 6540, "country": "FR", "sunrise": 1575444365, "sunset": 1575474935 }, "timezone": 3600, "id": 2988507, "name": "Paris", "cod": 200 }

interface ServerResponse {
  data: ServerData
}

interface ServerData {

}
export const GetData = (url: string): any => {
  if (url)
    return axios.get<ServerData>(url).then(response => {
      return response.data
    })
      .catch(error => {
        return (error)
      });
}