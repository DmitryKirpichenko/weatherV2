import axios from "axios"
import { Dispatch } from "redux"
import { WEATHERAPIKEY, WEATHERAPIKEY2 } from "../../constants"
import { normalizationApiAnswer } from "../../utils"
import {weatherAction, weatherActionType } from "../redusers/weatherReducer"
export const fetchWeather = (city:string) => {
    return async(dispatch: Dispatch<weatherAction>) => {
        try {
            dispatch({type: weatherActionType.ADD_WEATHER})
<<<<<<< Updated upstream
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHERAPIKEY2}`)
            dispatch({type: weatherActionType.ADD_WEATHER_SUCCESS, payload: normalizationApiAnswer(response.data)})
=======
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}`)
            dispatch({type: weatherActionType.ADD_WEATHER_SUCCESS, payload: response.data})
>>>>>>> Stashed changes

        } catch (error) {
            dispatch({type: weatherActionType.ADD_WEATHER_ERROR, payload: 'OMG Error'})
        }
    }
}