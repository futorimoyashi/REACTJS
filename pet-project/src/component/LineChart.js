import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from "react-chartjs-2";
import { Row, Col } from 'reactstrap';

export default function(props) {
    const [data, setData] = useState([])
    const [precipitation, setPrecipitation] = useState([])
    const [temp, setTemp] = useState([])

    function FtoC(d) {
        return Math.round((d - 32) * 5 / 9)
    }

    function getHour(date) {
        var d = new Date(date)
    
        return `${d.getHours()}h`
    }

    useEffect(() => {
        async function fetchData() {

            const url = 'https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/' + 
                        props.id + 
                        '?language=vi&apikey=' + 
                        'gHuEn9ghiy20CHSHAJ4ccgWcdU0XWkGS'
            const res = await axios.get(url)

            const listHours = []
            const listPrecipitation = []
            const listTemp = []

            res.data.map(function(x) {
                listHours.push(getHour(x.DateTime))
                listPrecipitation.push(x.PrecipitationProbability)
                listTemp.push(FtoC(x.Temperature.Value))
            })

            setData(listHours)
            setPrecipitation(listPrecipitation)
            setTemp(listTemp)
        }
        fetchData()
    }, [props.id])

    return (
        <Row style={{marginLeft: '25px'}}>
            <Col sm={{size: 6}}>
                <Line
                    data={{
                    labels: data,
                    datasets: [
                        {
                        data: precipitation,
                        label: "Precipitation Probability",
                        borderColor: "#3e95cd",
                        fill: false
                        }
                    ]
                    }}
                    options={{
                    title: {
                        display: true,
                        text: "Precipitation Probability in next 12 hours"
                    },
                    legend: {
                        display: true,
                        position: "bottom"
                    }
                    }}
                />
            </Col>
            <Col sm={{size: 6}} style={{marginLeft: '-15px'}}>
                <Line
                    data={{
                    labels: data,
                    datasets: [
                        {
                        data: temp,
                        label: "Temperature",
                        borderColor: "#cd753e",
                        fill: false
                        }
                    ]
                    }}
                    options={{
                    title: {
                        display: true,
                        text: "Temperature chart in next 12 hours (C Unit)"
                    },
                    legend: {
                        display: true,
                        position: "bottom"
                    }
                    }}
                />
            </Col>
        </Row>
    )
}