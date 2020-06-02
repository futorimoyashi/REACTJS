import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

Clock.prototype = {}

function dateFormat() {
    const date = new Date()

    const hour = `0${date.getHours()}`.slice(-2)
    const min = `0${date.getMinutes()}`.slice(-2)
    const sec = `0${date.getSeconds()}`.slice(-2)

    return `${hour}:${min}:${sec}`
}

export default function Clock(props) {
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const clock = setInterval(() => {
            const newTimeString = dateFormat()

            setTimeString(newTimeString)
        }, 1000)

        return() => {
            clearInterval(clock)
        }
    },[])

    return (
        <p style={{fontSize: '42px'}}>{timeString}</p>
    )
}