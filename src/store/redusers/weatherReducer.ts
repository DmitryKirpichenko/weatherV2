import { Iweather, INormalizationWeather } from '../../interfaces/interfaces'

interface weatherState {
<<<<<<< Updated upstream
    weather: INormalizationWeather;
=======
    weather: weatherInterface;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    payload: INormalizationWeather;
=======
    payload: weatherInterface;
>>>>>>> Stashed changes
}
interface IaddWeatherError {
    type: weatherActionType.ADD_WEATHER_ERROR;
    payload: string
}

<<<<<<< Updated upstream
=======
export interface weatherInterface {
    city:{
        country:string,
        name:string,
        coord:{lat:string, lon:string}
    }
    list:[{
        dt_txt:string,
        dt:string,
        main:{temp:string},
        weather:[{
            main:string,
            icon:string
        }]
    }]
}

>>>>>>> Stashed changes
export type weatherAction = IaddWeather | IaddWeatherSuccess | IaddWeatherError

const initialState: weatherState = {
    weather: {
<<<<<<< Updated upstream
        country: '',
        city: '',
        coord: { lat: '', lon: '' },
        fiveDayWeather: [{
            dt_txt: '',
            dt: '',
            temperature: '',
            weatherName: '',
            weatherIcon: ''
=======
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
>>>>>>> Stashed changes
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