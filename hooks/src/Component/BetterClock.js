import React from 'react'
import useClock from '../Hook/useClock'
import './BetterClock.scss'

export default function Clock(props) {
    const {timeString} = useClock()
    return (
        <div className="better-clock">
            <p className="better-clocl__time">{timeString}</p>
        </div>
    )
}