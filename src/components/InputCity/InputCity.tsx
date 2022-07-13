import React, { FC, useState } from "react";
import axios from "axios";
import { WEATHERAPIKEY, WEATHERAPIKEY2 } from "../../constants";
import { useActions } from "../../hooks/useActions";
import { StyledCityButton, StyledInput } from "./StyledInputCity";
import { getCitysByNameApi } from "../../utils";

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
        setcitysName(await getCitysByNameApi(name))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setViewSity(e.target.value)
        fetchCity(e.target.value)
    }

    return (
        <>
            <StyledInput list="citysList" placeholder={city} onChange={(e) => handleChange(e)}/>
            <datalist id="citysList">
                {citysName.map((item) => (
                    <option key={item.country + item.name}>{`${item.name},${item.country}`}</option>
                ))}
            </datalist>
            <StyledCityButton onClick={() => fetchWeather(viewCity)}/>
        </>
    )
}