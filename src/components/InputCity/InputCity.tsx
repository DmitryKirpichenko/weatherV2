import React, { FC, useState } from "react";
import AsyncSelect from 'react-select/async';
import axios from "axios";
import { WEATHERAPIKEY, WEATHERAPIKEY2 } from "../../constants";
import { useActions } from "../../hooks/useActions";
import { StyledCityButton, StyledInput, StyledInputWrapper } from "./StyledInputCity";
import { getCitysByNameApi } from "../../utils";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

interface ICitys {
    name: string
    country: string
}

interface ISelect {
    value: string,
    label: string
}

interface IInputCity {
    city: string
}

export const InputCity: FC<IInputCity> = ({ city }) => {
    const { fetchWeather } = useActions()

    const [selectCity, setViewSity] = useState({ value: city, label: city })

    const promiseOptions = (inputValue: string) =>
        new Promise<ISelect[]>((resolve) => {
            resolve(getCitysByNameApi(inputValue).then(answer => answer.map(item => {
                return {
                    value: `${item.name}, ${item.country}`,
                    label: `${item.name}, ${item.country}`
                }
            })));
        });
    const searchWeather = (newValue: ISelect | null) => {
        if (newValue) fetchWeather(newValue.value)
    }

    const handeleInputChange = (newValue: string) => {
        setViewSity({ value: newValue, label: newValue })
        return newValue
    }

    return (
        <>
            <StyledInputWrapper>
                <AsyncSelect
                    noOptionsMessage={() => null}
                    value={selectCity}
                    onChange={searchWeather}
                    cacheOptions
                    defaultOptions
                    onInputChange={handeleInputChange}
                    loadOptions={promiseOptions}
                    />
            </StyledInputWrapper>

            {/* <StyledInput list="citysList" placeholder={city} onChange={(e) => handleChange(e)} />
            <datalist id="citysList">
                {citysName.map((item) => (
                    <option key={item.country + item.name}>{`${item.name},${item.country}`}</option>
                ))}
            </datalist>
            <StyledCityButton onClick={() => fetchWeather(viewCity)} /> */}
        </>
    )
}