import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Row } from 'reactstrap'
export default function(props) {
    const [data, setData] = useState({
        temp: 0,
        wheatherIcon: 1,
        windSpeed: 0,
        uvIndex: 0,
        uvIndexText: '',
    })

    function GetImg(id) {
        var img
        if(id > 38) img = require("../icon/38.png")
        else img = require(`../icon/${id}.png`)
        return img
    }

    useEffect(() => {
        async function fetchData() {
            const url = 'https://dataservice.accuweather.com/currentconditions/v1/' + 
                        props.id + 
                        '?language=vi&apikey=' + 
                        // 'gHuEn9ghiy20CHSHAJ4ccgWcdU0XWkGS'
                        // 'yTGGU4zYUR1W0szyselrddoBP6fPwDPd'
                        'im8RbFAyIcPTvzDdh6ThZXsAZaXqJO02' +
                        '&details=true'
            try {
                const res = await axios.get(url)
                setData({
                    temp: res.data[0].Temperature.Metric.Value,
                    wheatherIcon: res.data[0].WeatherIcon,
                    windSpeed: res.data[0].Wind.Speed.Metric.Value,
                    uvIndex: res.data[0].UVIndex,
                    uvIndexText: res.data[0].UVIndexText 
                })
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    }, [props.id])
    return (
        <Row style={{marginBottom: "30px"}}>
            <Col sm={{size: 8}}>
                <img src={require(`../icon/${props.id}.jpg`)} />
            </Col>
            <div style={{height: 'auto', borderLeft: '3px solid black', textAlign: 'left'}}>
                <ul style={{listStyleType: 'none'}}>
                    <li><h4>Current Conditions</h4></li>
                    <li>
                        + Temperature: {data.temp}°C
                            <img alt="" src={GetImg(data.wheatherIcon)} style={{width: '12', height: '12'}}/>
                    </li> 
                    <li>+ Wind speed: {data.windSpeed}km/h</li> 
                    <li>+ UV Index: {data.uvIndex} - {data.uvIndexText}</li> 
                </ul>
            </div>
        </Row>
    )
}