import React, { FC } from "react";

import { TodayWeather } from "../TodayWeather/TodayWeather";
import { WeatherBlock } from "../WeatherBlock/WeatherBlock";
import { StyledDownWeatherPanel, StyledOtherWeather } from "./StyledDownWeatherPanel";
<<<<<<< Updated upstream
import { IFiveDayWeather} from "../../interfaces/interfaces";

interface IDownWeatherPanel{
    list: IFiveDayWeather[]
}

export const DownWeatherPanel: FC<IDownWeatherPanel> = ({list}) => {
    return (
        <StyledDownWeatherPanel>
            <TodayWeather icon={list[0].weatherIcon} temp={list[0].temperature}/>
            <StyledOtherWeather>
                {list.map((item,index) => {
                if(index !== 0){
                    return <WeatherBlock key={item.dt_txt} id={index} icon={item.weatherIcon} temp={item.temperature} dt={item.dt}/>
=======

export const DownWeatherPanel: FC<{
    list: [{
        dt_txt: string,
        main: { temp: string },
        weather: [{
            main: string,
            icon: string
        }]
    }]
}> = ({list}) => {
    return (
        <StyledDownWeatherPanel>
            <TodayWeather icon={list[0].weather[0].icon} temp={list[0].main.temp}></TodayWeather>
            <StyledOtherWeather>
                {list.map((item,index) => {
                if(index !== 0){
                    return <WeatherBlock key={item.dt_txt} id={index} icon={item.weather[0].icon} temp={item.main.temp}/>
>>>>>>> Stashed changes
                }
            })}
            </StyledOtherWeather>
            
        </StyledDownWeatherPanel>
    )
}