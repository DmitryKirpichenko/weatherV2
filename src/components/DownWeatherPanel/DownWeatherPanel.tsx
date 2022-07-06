import React, { FC } from "react";
import { TodayWeather } from "../TodayWeather/TodayWeather";
import { StyledDownWeatherPanel } from "./StyledDownWeatherPanel";

export const DownWeatherPanel:  FC<{icon: string, temp: string}> = ({icon, temp}) => {
    return(
        <StyledDownWeatherPanel>
            <TodayWeather icon={icon} temp={temp}></TodayWeather>
        </StyledDownWeatherPanel>
    )
}