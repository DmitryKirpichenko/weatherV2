import { Iweather, IweatherList } from '../interfaces/interfaces';
import { kelvinToCelsius } from './temperature';

const newList = (list: IweatherList[]) => list.reduce<IweatherList[]>((prev, item) => {
  if (item.dt_txt.split(' ')[1].split(':')[0] === '12') {
    prev.push(item);
    return prev;
  }
  return prev;
}, [list[0]]);

export const normalizationApiAnswer = (weather: Iweather) => ({
  country: weather.city.country,
  city: weather.city.name,
  coord: { lat: weather.city.coord.lat, lon: weather.city.coord.lon },
  fiveDayWeather: newList(weather.list).map((item) => ({
    dt_txt: item.dt_txt,
    dt: item.dt,
    temperature: kelvinToCelsius(item.main.temp),
    weatherName: item.weather[0].main,
    weatherIcon: item.weather[0].icon,
  })),
});
