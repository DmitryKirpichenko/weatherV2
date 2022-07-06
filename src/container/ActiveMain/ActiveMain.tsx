import React, { FC } from "react";
import { StyledActiveMain } from "./StyledActiveMain";
import Cloud from '../../image/Grey/cloud.jpg'
import Rain from '../../image/Grey/rain.jpeg'
import Sun from '../../image/Sun/sun.jpg'
import { weatherInterface } from "../../store/redusers/weatherReducer";
import { Data } from "../../components/Data/Data";
import { Country } from "../../components/Country/Counry";
import { DownWeatherPanel } from "../../components/DownWeatherPanel/DownWeatherPanel";
import { InputCity } from "../../components/InputCity/InputCity";

interface IActiveMain{
    weather: weatherInterface
}

export const ActiveMain: FC<IActiveMain> = (weather) => {
    let img = Sun

    console.log('!!!!!!!', weather)
    if (weather.weather) {
            img = weather.weather.weather[0].main === 'Rain' ?  Rain  : weather.weather.weather[0].main === 'sunny' ? Sun : Cloud
    }
    return(
        <>
            {weather.weather ? 
            <StyledActiveMain img={img}>
                <InputCity city={weather.weather.name}/>
                <Data dt={weather.weather.dt}></Data>
                <Country town={weather.weather.name} country={weather.weather.sys.country}></Country>
                <DownWeatherPanel icon={weather.weather.weather[0].icon} temp={weather.weather.main.temp}></DownWeatherPanel>
            </StyledActiveMain> : 
            <div></div>} 
        </>
    )
}