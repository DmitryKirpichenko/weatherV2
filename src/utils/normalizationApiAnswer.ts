import { INormalizationWeather, Iweather, IweatherList } from "../interfaces/interfaces";
import { kelvinToCelsius } from "./temperature";

const newList = (list: IweatherList[]) => {
    const lst:IweatherList[] = [list[0]]

    list.map((item, index) => {
        if (index > 0) {
            if (item.dt_txt.split(' ')[1].split(':')[0] === '12') {
                lst.push(item)
            }

        }

    })
    return lst
}

export const normalizationApiAnswer = (weather: Iweather) => {
    return {
        country: weather.city.country,
        city: weather.city.name,
        coord: { lat: weather.city.coord.lat, lon: weather.city.coord.lon },
        fiveDayWeather: newList(weather.list).map((item) => {
            return {
                dt_txt: item.dt_txt,
                dt: item.dt,
                temperature: kelvinToCelsius(item.main.temp),
                weatherName: item.weather[0].main,
                weatherIcon: item.weather[0].icon
            }
        })
    }
}