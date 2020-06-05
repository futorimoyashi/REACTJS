import React from 'react'
import useClock from '../Hook/useClock'

Clock.prototype = {}

export default function Clock(props) {
    const {timeString} = useClock()
    return (
        <p style={{fontSize: '42px'}}>{timeString}</p>
    )
}