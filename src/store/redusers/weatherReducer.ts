interface weatherState {
    weather: weatherInterface[];
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
    payload: weatherInterface[];
}
interface IaddWeatherError {
    type: weatherActionType.ADD_WEATHER_ERROR;
    payload: string
}

export interface weatherInterface {
    weather: [{ main: string, icon: string }]
    main: { temp: string }
    dt: string
    name: string
    sys: {country: string}
}

export type weatherAction = IaddWeather | IaddWeatherSuccess | IaddWeatherError

const initialState: weatherState = {
    weather: [],
    loading: false,
    error: null
}

export const weatherReducer = (state = initialState, actions: weatherAction): weatherState => {
    switch (actions.type) {
        case weatherActionType.ADD_WEATHER:
            return { weather: [], loading: true, error: null }
        case weatherActionType.ADD_WEATHER_SUCCESS:
            return { weather: [...actions.payload], loading: false, error: null }
        case weatherActionType.ADD_WEATHER_ERROR:
            return { weather: [], loading: false, error: actions.payload }
        default:
            return state
    }
}

export const addWeather = (payload: weatherAction) => ({ type: weatherActionType.ADD_WEATHER, payload })