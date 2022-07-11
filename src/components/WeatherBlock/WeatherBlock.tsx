import React, { FC } from 'react'
import { StyledWeatherBlock, StyledWeatherBlockDay, StyledWeatherBlockDayWrapper, StyledWeatherBlockImg, StyledWeatherBlockImgWrapper, StyledWeatherBlockTemperature } from './StyledWeatherBlock'

export const WeatherBlock: FC<{id: number, icon:string, temp:string, dt: string}> = ({id, icon, temp, dt}) => {
    const date = new Date(Number(dt) *1000)
    const day = date.toString().split(' ')[0]
    return(
        <StyledWeatherBlock number={id}>
            <StyledWeatherBlockDayWrapper>
            {day}
            </StyledWeatherBlockDayWrapper>
            <StyledWeatherBlockImgWrapper>
                <StyledWeatherBlockImg src={require(`../../image/weatherIcon/svg/${icon}.svg`)}/>
            </StyledWeatherBlockImgWrapper>
            <StyledWeatherBlockTemperature>{(Number(temp) - 273).toFixed()}{'\u00b0'}</StyledWeatherBlockTemperature>

        </StyledWeatherBlock>

    )
}