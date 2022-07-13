import React, { FC } from "react";
import { StyledIcon, StyledImg, StyledTemperature, StyledTextWrapper, StyledText, StyledTodayWeather } from "./StyledTodayWeather";

interface ITodayWeather {
    icon: string, 
    temp: string
}
export const TodayWeather: FC<ITodayWeather> = ({icon, temp}) => {
    return(
        <StyledTodayWeather>
            <StyledIcon>
                <StyledImg src={require(`../../image/weatherIcon/svg/${icon}.svg`)}/>
            </StyledIcon>
            <StyledTextWrapper>
                <StyledText>TODAY</StyledText>
            </StyledTextWrapper>
            <StyledTemperature>{(Number(temp) - 273).toFixed()}{'\u00b0'}</StyledTemperature>
        </StyledTodayWeather>
    )
}