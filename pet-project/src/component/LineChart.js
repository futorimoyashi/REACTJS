import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from "react-chartjs-2";
import { Row, Col } from 'reactstrap';

export default function(props) {
    const [data, setData] = useState([])
    const [precipitation, setPrecipitation] = useState([])

    // function GetImg(id) {
    //     if(id > 38)  var img = require(`../icon/38.png`)
    //     else var img = require(`../icon/${id}.png`)
    //     return img
    // }

    function getHour(date) {
        var d = new Date(date)
    
        return `${d.getHours()}`
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

            res.data.map(x => {
                listHours.push(getHour(x.DateTime))
                listPrecipitation.push(x.PrecipitationProbability)
            })

            setData(listHours)
            setPrecipitation(listPrecipitation)
        }
        fetchData()
    }, [props.id])

    return (
        <Row>
            <Col sm={{size: 6, offset: 0}}>
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
        </Row>
    )
}