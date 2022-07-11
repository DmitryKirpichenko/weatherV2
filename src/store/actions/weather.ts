import axios from "axios"
import { Dispatch } from "redux"
import { KEY, KEY2 } from "../../constants"
import {weatherAction, weatherActionType } from "../redusers/weatherReducer"
export const fetchWeather = (city:string) => {
    return async(dispatch: Dispatch<weatherAction>) => {
        try {
            dispatch({type: weatherActionType.ADD_WEATHER})
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY2}`)
            dispatch({type: weatherActionType.ADD_WEATHER_SUCCESS, payload: response.data})

        } catch (error) {
            dispatch({type: weatherActionType.ADD_WEATHER_ERROR, payload: 'OMG Error'})
        }
    }
}