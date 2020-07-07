import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Row
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

    function GetImg(id) {
        var img
        if(id > 38) img = require("../icon/38.png")
        else img = require(`../icon/${id}.png`)
        return img
    }

    useEffect(() => {
        async function fetchData() {
            const url = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/' + 
                        props.id + 
                        '?language=vi&apikey=' + 
                        // 'gHuEn9ghiy20CHSHAJ4ccgWcdU0XWkGS'
                        'yTGGU4zYUR1W0szyselrddoBP6fPwDPd'
            try {
                axios.get(url)
                    .then(res => setData(res.data.DailyForecasts))
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    }, [props.id])

    return (
        <Row style={{marginLeft: '17px'}}>
            {data.map(x => (
                <Col sm="2" className="m-3">
                    <Card>
                        <CardBody>
                            <CardTitle className="h5">{formatDate(x.Date)}</CardTitle>
                            <hr/>
                            <CardSubtitle>+ Ngày: {FtoC(x.Temperature.Maximum.Value)}°C</CardSubtitle>
                            <CardText>{x.Day.IconPhrase}
                                <CardImg src={GetImg(x.Day.Icon)} style={{width: '30%', height: '30%'}}/>
                            </CardText>
                            <CardSubtitle>+ Đêm: {FtoC(x.Temperature.Minimum.Value)}°C</CardSubtitle>
                            <CardText>{x.Night.IconPhrase}
                                <CardImg src={GetImg(x.Night.Icon)} style={{width: '30%', height: '30%'}}/>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}