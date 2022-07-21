import React, { FC } from 'react';

import { StyledActiveMain } from './StyledActiveMain';
import { Data } from '../../components/Data/Data';
import { Country } from '../../components/Country/Counry';
import { DownWeatherPanel } from '../../components/DownWeatherPanel/DownWeatherPanel';
import { InputCity } from '../../components/InputCity/InputCity';

import Cloud from '../../image/Grey/cloud.jpg';
import Rain from '../../image/Grey/rain.jpeg';
import Sun from '../../image/Sun/sun.jpg';

import { INormalizationWeather } from '../../interfaces/interfaces';

interface IActiveMain {
    weather: INormalizationWeather
}

export const ActiveMain: FC<IActiveMain> = ({ weather }) => {
  const getImage = () => {
    if (weather.fiveDayWeather[0].weatherName === 'Sun') return Sun;
    if (weather.fiveDayWeather[0].weatherName === 'Rain') return Rain;
    return Cloud;
  };

  return (
        <>
            {weather.city
              ? <StyledActiveMain img={getImage()}>
                    <InputCity city={weather.city} />
                    <Data />
                    <Country town={weather.city} country={weather.country} />
                    <DownWeatherPanel list={weather.fiveDayWeather} />
                </StyledActiveMain> : null}
        </>
  );
};
