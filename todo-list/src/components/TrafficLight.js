import React, { Component } from 'react'
import classNames from 'classnames'
import './TodoItem.css'

const RED = 0;
const YELLOW = 1;
const GREEN = 2;
class TrafficLight extends Component {
    render() {
        const { currentColor } = this.props
        return <div className="TrafficLight">
            <div className={classNames('bulb', 'red', {
                active: currentColor === RED
            })}></div>
            <div className={classNames('bulb', 'yellow', {
                active: currentColor === YELLOW
            })}></div>
            <div className={classNames('bulb', 'green', {
                active: currentColor === GREEN
            })}></div>
        </div>
    }
}

export default TrafficLight