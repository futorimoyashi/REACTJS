import React, { Component } from 'react'

class UpdateNum extends Component {
    constructor() {
        super();
        this.state = { value: 0}
        this.minus = this.minus.bind(this)
        this.plus = this.plus.bind(this)
    }

    minus() {
        var newValue = this.state.value - 1
        this.setState({value: newValue})
    }

    plus() {
        var newValue = this.state.value + 1
        this.setState({value: newValue})
    }
    render() {
        return (
            <div>
                <button onClick={this.minus}>-</button>
                <p>{this.state.value}</p>
                <button onClick={this.plus}>+</button>
            </div>
        );
    }
}

export default UpdateNum