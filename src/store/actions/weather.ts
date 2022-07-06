import axios from "axios"
import { Dispatch } from "redux"
import { KEY } from "../../constants"
import {weatherAction, weatherActionType } from "../redusers/weatherReducer"
export const fetchWeather = (city:string) => {
    return async(dispatch: Dispatch<weatherAction>) => {
        try {
            console.log('0')
            dispatch({type: weatherActionType.ADD_WEATHER})
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
            console.log(response.data, '1')
            dispatch({type: weatherActionType.ADD_WEATHER_SUCCESS, payload: [response.data]})

        } catch (error) {
            dispatch({type: weatherActionType.ADD_WEATHER_ERROR, payload: 'OMG Error'})
        }
    }
}