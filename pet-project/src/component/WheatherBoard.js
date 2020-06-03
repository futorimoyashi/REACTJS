import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';

export default function(props) {
    const [data, setData] = useState([])

    function formatDate(date) {
        var d = new Date(date)
    
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    }    

    function FtoC(d) {
        return Math.round((d - 32) * 5 / 9)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                axios.get('https://dataservice.accuweather.com/forecasts/v1/daily/5day/' + '352954' + '?language=vi&apikey=' + 'gHuEn9ghiy20CHSHAJ4ccgWcdU0XWkGS')
                    .then(res => setData(res.data.DailyForecasts))
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    }, [])

    return (
        <Row>
            {data.map(x => (
                <Col sm="2" className="m-3">
                    <Card>
                        <CardBody>
                        <CardTitle>{formatDate(x.Date)}</CardTitle>
                        <CardSubtitle>+ Ngày: {FtoC(x.Temperature.Maximum.Value)}°C</CardSubtitle>
                        <CardText>{x.Day.IconPhrase}</CardText>
                        <CardSubtitle>+ Đêm: {FtoC(x.Temperature.Minimum.Value)}°C</CardSubtitle>
                        <CardText>{x.Night.IconPhrase}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}