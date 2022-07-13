import axios from "axios";
import React, { FC, useState } from "react";
import { KEY, KEY2 } from "../../constants";
import { useActions } from "../../hooks/useActions";
import { StyledCityButton, StyledInput } from "./StyledInputCity";

interface ICitys{
    name:string
    country: string
}

interface IInputCity{
    city: string 
}

export const InputCity: FC<IInputCity> = ({ city }) => {
    const { fetchWeather } = useActions()

    const [viewCity, setViewSity] = useState(city)
    const [citysName, setcitysName] = useState<ICitys[]>([{name:city, country:''}])

    const fetchCity = async (name:string) => {
        await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${KEY2}`).then(answer => setcitysName(answer.data))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setViewSity(e.target.value)
        fetchCity(e.target.value)
    }

    return (
        <>
            <StyledInput list="citysList" placeholder={city} onChange={(e) => handleChange(e)}></StyledInput>
            <datalist id="citysList">
                {citysName.map((item) => (
                    <option key={item.country + item.name}>{`${item.name},${item.country}`}</option>
                ))}
                
            </datalist>
            <StyledCityButton onClick={() => fetchWeather(viewCity)}></StyledCityButton>
        </>
    )
}