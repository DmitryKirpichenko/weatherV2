import React, { FC } from "react";
import { StyledData, StyledTime, StyledDate } from "./StyledData";

export const Data: FC<{dt: string}> = ({dt}) => {
    const date = new Date(Number(dt) * 1000)
    let dataArr = date.toString().split(' ')
    let dayWeek = dataArr[0]
    let month = dataArr[1]
    let day = dataArr[2]
    let year = dataArr[3]
    let time = dataArr[4].slice(0,5)
    return(
        <StyledData>
            <StyledTime>{time}</StyledTime>
            <StyledDate>{`${dayWeek}, ${day} ${month} ${year}`}</StyledDate>
        </StyledData>
    )
}