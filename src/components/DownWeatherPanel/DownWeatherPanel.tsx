import React, { FC } from "react";
import { TodayWeather } from "../TodayWeather/TodayWeather";
import { WeatherBlock } from "../WeatherBlock/WeatherBlock";
import { StyledDownWeatherPanel, StyledOtherWeather } from "./StyledDownWeatherPanel";

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
                }
            })}
            </StyledOtherWeather>
            
        </StyledDownWeatherPanel>
    )
}