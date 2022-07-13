import React, { FC } from "react";
import { TodayWeather } from "../TodayWeather/TodayWeather";
import { WeatherBlock } from "../WeatherBlock/WeatherBlock";
import { StyledDownWeatherPanel, StyledOtherWeather } from "./StyledDownWeatherPanel";
import { IweatherList } from "../../interfaces/interfaces";

interface IDownWeatherPanel{
    list: IweatherList[]
}

export const DownWeatherPanel: FC<IDownWeatherPanel> = ({list}) => {
    return (
        <StyledDownWeatherPanel>
            <TodayWeather icon={list[0].weather[0].icon} temp={list[0].main.temp}></TodayWeather>
            <StyledOtherWeather>
                {list.map((item,index) => {
                if(index !== 0){
                    return <WeatherBlock key={item.dt_txt} id={index} icon={item.weather[0].icon} temp={item.main.temp} dt={item.dt}/>
                }
            })}
            </StyledOtherWeather>
            
        </StyledDownWeatherPanel>
    )
}