import React, { FC } from 'react'
<<<<<<< Updated upstream

import { StyledWeatherBlock, StyledWeatherBlockDayWrapper, StyledWeatherBlockImg, StyledWeatherBlockImgWrapper, StyledWeatherBlockTemperature } from './StyledWeatherBlock'

interface IWeatherBlock{
    id: number, 
    icon:string, 
    temp:string, 
    dt: string
}

const options ={
    weekday: 'short'
} as Intl.DateTimeFormatOptions

export const WeatherBlock: FC<IWeatherBlock> = ({id, icon, temp, dt}) => {
    const date = new Date(Number(dt) *1000)
    return(
        <StyledWeatherBlock number={id}>
            <StyledWeatherBlockDayWrapper>
            {date.toLocaleDateString('en-US', options)}
=======
import { StyledWeatherBlock, StyledWeatherBlockDay, StyledWeatherBlockDayWrapper, StyledWeatherBlockImg, StyledWeatherBlockImgWrapper, StyledWeatherBlockTemperature } from './StyledWeatherBlock'

export const WeatherBlock: FC<{icon: string, temp: string, id: number}> = ({icon, temp, id}) => {
    return(
        <StyledWeatherBlock number={id}>
            <StyledWeatherBlockDayWrapper>
                <StyledWeatherBlockDay></StyledWeatherBlockDay>
>>>>>>> Stashed changes
            </StyledWeatherBlockDayWrapper>
            <StyledWeatherBlockImgWrapper>
                <StyledWeatherBlockImg src={require(`../../image/weatherIcon/svg/${icon}.svg`)}/>
            </StyledWeatherBlockImgWrapper>
<<<<<<< Updated upstream
            <StyledWeatherBlockTemperature>{temp}{'\u00b0'}</StyledWeatherBlockTemperature>
        </StyledWeatherBlock>

=======
            <StyledWeatherBlockTemperature>{(Number(temp) - 273).toFixed()}{'\u00b0'}</StyledWeatherBlockTemperature>
        </StyledWeatherBlock>
>>>>>>> Stashed changes
    )
}