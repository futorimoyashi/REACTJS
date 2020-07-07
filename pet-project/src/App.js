import React, { useState } from 'react';
import TopMenu from './component/TopMenu'
import CurrentInfor from './component/CurrentInfor'
import WheatherBoard from './component/WheatherBoard'
import LineChart from './component/LineChart'
import Footer from './component/Footer'

import './App.css'
import { Col, Form, FormGroup, Input, Label} from 'reactstrap';

function App() {
  const [id, setId] = useState(353981)

  return (
    <div className="App">

      <TopMenu />

      <Col sm={{size: 6}} style={{marginTop: '20px', marginBottom: '20px'}}>
        <Form>
            <FormGroup row>
                <Label className="h1" for="exampleSelect" sm={4}>Select Your Region</Label>
                <Col sm={8}>
                  <Input type="select" name="selectMulti" id="city" onClick={() => {
                      setId(document.getElementById("city").value)
                  }}>
                      
                      <option value="353981">Sai Gon</option>
                      <option value="352954">Da Nang</option>
                      <option value="353412">Ha Noi</option>
                      <option value="348181">Atlanta</option>

                  </Input>
                </Col>
            </FormGroup>
        </Form>
      </Col>
      
      <CurrentInfor id={id}/>

      <LineChart id={id} />

      <div className="col-6 offset-3" style={{borderTop: '2px solid black', borderBottom: '2px solid black', marginTop: '30px'}}>
        <h4>5 Days of Daily Forecasts</h4>
      </div>

      <WheatherBoard id={id} />

      <Footer />
    </div>
  );
}

export default App;
