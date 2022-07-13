import React, { FC } from 'react'
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
            </StyledWeatherBlockDayWrapper>
            <StyledWeatherBlockImgWrapper>
                <StyledWeatherBlockImg src={require(`../../image/weatherIcon/svg/${icon}.svg`)}/>
            </StyledWeatherBlockImgWrapper>
            <StyledWeatherBlockTemperature>{temp}{'\u00b0'}</StyledWeatherBlockTemperature>
        </StyledWeatherBlock>

    )
}