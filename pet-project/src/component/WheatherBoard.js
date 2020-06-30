import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Form, FormGroup, Label, Input
  } from 'reactstrap';

export default function(props) {
    const [data, setData] = useState([])
    const [id, setId] = useState(353981)

    function formatDate(date) {
        var d = new Date(date)
    
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    }    

    function FtoC(d) {
        return Math.round((d - 32) * 5 / 9)
    }

    useEffect(() => {
        async function fetchData() {
            const url = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/' + 
                        id + 
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
    }, [id])

    return (
        <div>
            <Form style={{margin: '40px'}}>
                
                <FormGroup>
                    <h2>Choose Ur City</h2>
                    <Input type="select" name="selectMulti" id="city" onClick={() => {
                        setId(document.getElementById("city").value)
                    }}>
                        <option value="353981">Sai Gon</option>
                        <option value="352954">Da Nang</option>
                        <option value="353412">Ha Noi</option>
                    </Input>
                </FormGroup>
            </Form>
            <Row style={{marginLeft: '20px'}}>
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
        </div>
    )
}