import React, { FC, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { StyledCityButton, StyledInput } from "./StyledInputCity";

export const InputCity: FC<{ city: string }> = ({ city }) => {
    const { fetchWeather } = useActions()

    let [viewCity, setViewSity] = useState(city)

    let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setViewSity(e.target.value)
    }

    return (
        <>
            <StyledInput placeholder={city} onChange={(e) => handleChange(e)}></StyledInput>
            <StyledCityButton onClick={() => fetchWeather(viewCity)}></StyledCityButton>
        </>
    )
}