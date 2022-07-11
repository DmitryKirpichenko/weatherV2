import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { StyledMain } from './StyledMain'
import Grey from '../image/Grey/background.jpg'
import Sun from '../image/Sun/background.jpg'
import { ActiveMain } from '../container/ActiveMain/ActiveMain'
import axios from 'axios'

export const Main = () => {
    const { loading, error, weather } = useTypeSelector(state => state.weather)
    const { fetchWeather } = useActions()
    let img = Sun

    const getCity = async () =>{
        await axios.get('https://geolocation-db.com/json/').then(answer => 
        {
            if(answer.data.city !== null){
                fetchWeather(answer.data.city)
            }else{
                fetchWeather('London')
            }
            })
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
    if (weather.city.name !== '') {
        img = weather.list[0].weather[0].main === 'Rain' ?  Grey  : weather.list[0].weather[0].main === 'sunny' ? Sun : Grey
    }
    return(
        <StyledMain img={img}>
            <ActiveMain weather={weather}></ActiveMain>
        </StyledMain>
    )
}