import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function(props) {
    const [data, setData] = useState([])

    // function GetImg(id) {
    //     if(id > 38)  var img = require(`../icon/38.png`)
    //     else var img = require(`../icon/${id}.png`)
    //     return img
    // }

    useEffect(() => {
        async function fetchData() {
            const url = 'https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/' + 
                        props.id + 
                        '?language=vi&apikey=' + 
                        'gHuEn9ghiy20CHSHAJ4ccgWcdU0XWkGS'
            try {
                axios.get(url)
                    .then(res => setData(res.data))
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <ul>
                {data.map(x => <li>{x.IconPhrase}</li>)}
            </ul>
        </div>
        // <p>Nothing</p>
    )
}