import axios from 'axios';
import { Dispatch } from 'redux';
import { WEATHERAPIKEY2 } from '../../constants';
import { normalizationApiAnswer } from '../../utils';
import { weatherAction, weatherActionType } from '../redusers/weatherReducer';

export const fetchWeather = (city:string) => async (dispatch: Dispatch<weatherAction>) => {
  try {
    dispatch({ type: weatherActionType.ADD_WEATHER });
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHERAPIKEY2}`);
    dispatch({
      type: weatherActionType.ADD_WEATHER_SUCCESS,
      payload: normalizationApiAnswer(response.data)
    });
  } catch (error) {
    dispatch({ type: weatherActionType.ADD_WEATHER_ERROR, payload: 'OMG Error' });
  }
};
