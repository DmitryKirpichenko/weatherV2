import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { StyledData, StyledTime, StyledDate } from "./StyledData";

export const Data: FC<{dt:string }> = ({dt }) => {
    const date = new Date()
    let dataArr = date.toString().split(' ')
    console.log(dataArr)
    let dayWeek = dataArr[0]
    let [data, setData] = useState([dataArr[3],dataArr[1],dataArr[2]])
    let time = dataArr[4].slice(0,5).split(':')
    let [hour, setHour] = useState(time[0])
    let [minute, setMinute] = useState(time[1])

    useEffect(() => {
        const tick = setInterval(timeTick, 60000)
        return() => {
            clearInterval(tick)
        }
    },[minute, hour])

    let timeTick = () => {
        if(minute === '59'){
            setMinute('00')
            let h= Number(hour)
            setHour(`${h + 1}`)
        }else{
            let m = Number(minute)
            setMinute(`${m + 1}`)
        }
    }
    return (
        <>
            {dt &&
                <StyledData>
                    <StyledTime>{`${hour}:${minute}`}</StyledTime>
                    <StyledDate>{`${dayWeek},${data[2]} ${data[1]} ${data[0]}`}</StyledDate>
                </StyledData>}</>


    )
}