import React, { FC } from 'react'
import { StyledWeatherBlock, StyledWeatherBlockDayWrapper, StyledWeatherBlockImg, StyledWeatherBlockImgWrapper, StyledWeatherBlockTemperature } from './StyledWeatherBlock'

export const WeatherBlock: FC<{id: number, icon:string, temp:string}> = ({id, icon, temp}) => {
    return(
        <StyledWeatherBlock number={id}>
            <StyledWeatherBlockDayWrapper></StyledWeatherBlockDayWrapper>
            <StyledWeatherBlockImgWrapper>
                <StyledWeatherBlockImg src={require(`../../image/weatherIcon/svg/${icon}.svg`)}/>
            </StyledWeatherBlockImgWrapper>
            <StyledWeatherBlockTemperature>{(Number(temp) - 273).toFixed()}{'\u00b0'}</StyledWeatherBlockTemperature>

        </StyledWeatherBlock>

    )
}