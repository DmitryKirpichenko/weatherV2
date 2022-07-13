import React, { useEffect, useState } from "react";
import { StyledData, StyledTime, StyledDate } from "./StyledData";

const options ={
    weekday: 'short',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
} as Intl.DateTimeFormatOptions

export const Data = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const tick = setInterval(() => setDate(new Date()), 1000)
        return () => {
            clearInterval(tick)
        }
    })

    return (
        <StyledData>
            <StyledTime>{`${date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()}`}</StyledTime>
            <StyledDate>{date.toLocaleDateString('en-US', options)}</StyledDate>
        </StyledData>


    )
}