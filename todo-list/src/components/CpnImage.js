import React, { Component} from 'react'
import './TodoItem.css'

class CpnImage extends Component {
    constructor() {
        super();
        this.state = { active: false}
    }
    render() {
        return (
            <div>
                <img className={this.state.active && 'banner'} src="http://lorempixel.com/400/200"
                 alt="" onClick={ () => {this.setState({active: !this.state.active})}}/>
            </div>
        );
    }
}

export default CpnImage