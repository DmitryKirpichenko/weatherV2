import React, { FC } from 'react';

import { TodayWeather } from '../TodayWeather/TodayWeather';
import { WeatherBlock } from '../WeatherBlock/WeatherBlock';
import { StyledDownWeatherPanel, StyledOtherWeather } from './StyledDownWeatherPanel';

import { IFiveDayWeather } from '../../interfaces/interfaces';

interface IDownWeatherPanel{
    list: IFiveDayWeather[]
}

export const DownWeatherPanel: FC<IDownWeatherPanel> = ({ list }) => (
        <StyledDownWeatherPanel>
            <TodayWeather icon={list[0].weatherIcon} temp={list[0].temperature}/>
            <StyledOtherWeather>
                {list.map((item, index) => {
                  if (index === 0) {
                    return null;
                  }
                  return <WeatherBlock
                    key={item.dt_txt}
                    id={index}
                    icon={item.weatherIcon}
                    temp={item.temperature}
                    dt={item.dt}/>;
                })}
            </StyledOtherWeather>

        </StyledDownWeatherPanel>
);
