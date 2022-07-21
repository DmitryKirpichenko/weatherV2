import { INormalizationWeather } from '../../interfaces/interfaces';

interface weatherState {
    weather: INormalizationWeather;
    loading: boolean;
    error: null | string
}

export enum weatherActionType {
    ADD_WEATHER = 'ADD_WEATHER',
    ADD_WEATHER_SUCCESS = 'ADD_WEATHER_SUCCESS',
    ADD_WEATHER_ERROR = 'ADD_WEATHER_ERROR'
}

interface IaddWeather {
    type: weatherActionType.ADD_WEATHER;
}
interface IaddWeatherSuccess {
    type: weatherActionType.ADD_WEATHER_SUCCESS;
    payload: INormalizationWeather;
}
interface IaddWeatherError {
    type: weatherActionType.ADD_WEATHER_ERROR;
    payload: string
}
export type weatherAction = IaddWeather | IaddWeatherSuccess | IaddWeatherError

const initialState: weatherState = {
  weather: {
    country: '',
    city: '',
    coord: { lat: '', lon: '' },
    fiveDayWeather: [{
      dt_txt: '',
      dt: '',
      temperature: '',
      weatherName: '',
      weatherIcon: '',
    }],
  },
  loading: false,
  error: null,
};

export const weatherReducer = (state = initialState, actions: weatherAction): weatherState => {
  switch (actions.type) {
    case weatherActionType.ADD_WEATHER:
      return { weather: initialState.weather, loading: true, error: null };
    case weatherActionType.ADD_WEATHER_SUCCESS:
      return { weather: actions.payload, loading: false, error: null };
    case weatherActionType.ADD_WEATHER_ERROR:
      return { weather: initialState.weather, loading: false, error: actions.payload };
    default:
      return state;
  }
};

export const addWeather = (payload: weatherAction) => (
  { type: weatherActionType.ADD_WEATHER, payload });
