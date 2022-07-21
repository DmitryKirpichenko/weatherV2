import axios from 'axios';
import { WEATHERAPIKEY2 } from '../constants';

interface ICitys{
    name:string
    country: string
}
export const getCitysByNameApi = (name: string) => axios.get<ICitys[]>(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${WEATHERAPIKEY2}`).then((answer) => answer.data);
export const getCityApi = () => axios.get('https://geolocation-db.com/json/').then((answer) => answer.data.city);
