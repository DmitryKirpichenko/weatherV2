import React, { useEffect } from 'react'

import { StyledMain } from './StyledMain'
import { ActiveMain } from '../container/ActiveMain/ActiveMain'

import { getCityApi } from '../utils'
import { useActions } from '../hooks/useActions'
import { useTypeSelector } from '../hooks/useTypeSelector'

import Grey from '../image/Grey/background.jpg'
import Sun from '../image/Sun/background.jpg'

export const Main = () => {
    const { loading, error, weather } = useTypeSelector(state => state.weather)
    const { fetchWeather } = useActions()

    const getCity = async () => {
        const city = getCityApi()
        if (city !== null) {
            fetchWeather(await city)
        } else {
            fetchWeather('London')
        }
        
    }

    useEffect(() => {
        getCity()
    }, [])

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
    if (error) {
        return (
            <div>{error}</div>
        )
    }
<<<<<<< Updated upstream
    const getImage = () => {
        if (weather.city) {
            if (weather.fiveDayWeather[0].weatherName === 'Sun') return Sun
        }
        return Grey
    }
    return (
        <StyledMain img={getImage()}>
            <ActiveMain weather={weather} />
=======
    if (weather.city.name !== '') {
        img = weather.list[0].weather[0].main === 'Rain' ?  Grey  : weather.list[0].weather[0].main === 'sunny' ? Sun : Grey
    }
    return(
        <StyledMain img={img}>
            <ActiveMain weather={weather}></ActiveMain>
>>>>>>> Stashed changes
        </StyledMain>
    )
}