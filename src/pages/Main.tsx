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
    const getImage = () => {
        if (weather.city) {
            if (weather.fiveDayWeather[0].weatherName === 'Sun') return Sun
        }
        return Grey
    }
    return (
        <StyledMain img={getImage()}>
            <ActiveMain weather={weather} />
        </StyledMain>
    )
}