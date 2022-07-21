import React, { FC } from "react";

import { StyledActiveMain } from "./StyledActiveMain";
import { Data } from "../../components/Data/Data";
import { Country } from "../../components/Country/Counry";
import { DownWeatherPanel } from "../../components/DownWeatherPanel/DownWeatherPanel";
import { InputCity } from "../../components/InputCity/InputCity";

<<<<<<< Updated upstream
import Cloud from '../../image/Grey/cloud.jpg'
import Rain from '../../image/Grey/rain.jpeg'
import Sun from '../../image/Sun/sun.jpg'

import {INormalizationWeather} from '../../interfaces/interfaces'

interface IActiveMain {
    weather: INormalizationWeather
}

export const ActiveMain: FC<IActiveMain> = ({ weather }) => {
    const getImage = () => {
        if (weather.city) {
            if (weather.fiveDayWeather[0].weatherName === 'Sun') return Sun
            else if (weather.fiveDayWeather[0].weatherName === 'Rain') return Rain
        }
        return Cloud
    }

    return (
        <>
            {weather.city ?
                <StyledActiveMain img={getImage()}>
                    <InputCity city={weather.city} />
                    <Data/>
                    <Country town={weather.city} country={weather.country}/>
                    <DownWeatherPanel list={weather.fiveDayWeather}/>
                </StyledActiveMain>: null}
=======
interface IActiveMain {
    weather: weatherInterface
}

export const ActiveMain: FC<IActiveMain> = ({ weather }) => {
    let img = Sun

    if (weather.city.name !== '') {
        img = weather.list[0].weather[0].main === 'Rain' ? Rain : weather.list[0].weather[0].main === 'sunny' ? Sun : Cloud
    }


    let newList: [{
        dt_txt: string;
        main: {
            temp: string;
        };
        weather: [{
            main: string;
            icon: string;
        }];
    }] = [weather.list[0]]

    weather.list.map((item, index) => {
        if (index > 0) {
            if ((item.dt_txt.split(' ')[0].split('-')[2] !== newList[newList.length - 1].dt_txt.split(' ')[0].split('-')[2]) 
            && 
            (item.dt_txt.split(' ')[1].split(':')[0] === '12')) {
                newList.push(item)
            }

        }

    })

    return (
        <>
            {weather.city.name !== '' ?
                <StyledActiveMain img={img}>
                    <InputCity city={weather.city.name} />
                    <Data lat={weather.city.coord.lat} lon={weather.city.coord.lon} day={weather.list[0].dt}></Data>
                    <Country town={weather.city.name} country={weather.city.country}></Country>
                    <DownWeatherPanel list={newList}></DownWeatherPanel>
                </StyledActiveMain> :
                <div></div>}
>>>>>>> Stashed changes
        </>
    )
}