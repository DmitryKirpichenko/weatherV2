import {Iweather} from '../../interfaces/interfaces'

interface weatherState {
    weather: Iweather;
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
    payload: Iweather;
}
interface IaddWeatherError {
    type: weatherActionType.ADD_WEATHER_ERROR;
    payload: string
}

export type weatherAction = IaddWeather | IaddWeatherSuccess | IaddWeatherError

const initialState: weatherState = {
    weather: {
        city:{
            country:'',
            name:'',
            coord:{lat:'', lon:''}
        },
        list:[{
            dt_txt:'',
            dt:'',
            main:{temp:''},
            weather:[{
                main:'',
                icon:''
            }]
        }]
    },
    loading: false,
    error: null
}

export const weatherReducer = (state = initialState, actions: weatherAction): weatherState => {
    switch (actions.type) {
        case weatherActionType.ADD_WEATHER:
            return { weather: initialState.weather, loading: true, error: null }
        case weatherActionType.ADD_WEATHER_SUCCESS:
            return { weather: actions.payload, loading: false, error: null }
        case weatherActionType.ADD_WEATHER_ERROR:
            return { weather: initialState.weather, loading: false, error: actions.payload }
        default:
            return state
    }
}

export const addWeather = (payload: weatherAction) => ({ type: weatherActionType.ADD_WEATHER, payload })