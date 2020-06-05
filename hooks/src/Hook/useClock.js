import { useState, useEffect } from 'react'

function dateFormat() {
    const date = new Date()

    const hour = `0${date.getHours()}`.slice(-2)
    const min = `0${date.getMinutes()}`.slice(-2)
    const sec = `0${date.getSeconds()}`.slice(-2)

    return `${hour}:${min}:${sec}`
}

export default function useClock(props) {
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

    return { timeString }
}