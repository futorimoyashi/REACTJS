import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function() {
    const [ infor, setInfor] = useState([])

    useEffect(() => {
        async function fechData() {
            try {
                let url = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/' + '352954' + '?language=vi&apikey=' + 'gHuEn9ghiy20CHSHAJ4ccgWcdU0XWkGS'
                axios.get(url).then(res => setInfor(res.data.DailyForecasts))
            } catch (error) {
                console.log(error.message)
            }
        }
        fechData()
    }, []) 

    return (
        <div>
            {infor.map(data => <h2>Date {data.Date} has maximum temp is {Math.round((data.Temperature.Maximum.Value - 32) * 5 / 9)}C</h2>)}
        </div>
    )
}