import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { StyledData, StyledTime, StyledDate } from "./StyledData";

export const Data: FC<{ lat: string, lon: string, day:string }> = ({ lat, lon, day }) => {
    let [dt, setDate] = useState(['0000','00','00'])
    let [hour, setHour] = useState('0')
    let [minute, setMinute] = useState('0')
    let nowDay = (new Date(Number(day) * 1000)).toString().split(' ')[0]


    const getTime = async () => {
        await axios.get(`http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lon}&username=lykys`).then(answer => {
            setDate(answer.data.time.split(' ')[0].split('-'))
            setHour(answer.data.time.split(' ')[1].split(':')[0])
            setMinute(answer.data.time.split(' ')[1].split(':')[1])
        })
    }

    useEffect(() => {
        getTime()
        
    }, [])
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
                    <StyledDate>{`${nowDay},${dt[2]} ${dt[1]} ${dt[0]}`}</StyledDate>
                </StyledData>}</>


    )
}