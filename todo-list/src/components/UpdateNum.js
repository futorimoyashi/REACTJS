import React, { Component } from 'react'

class UpdateNum extends Component {
    constructor() {
        console.log('Counter Constructor')
        super();
        this.state = { value: 0}
        this.minus = this.minus.bind(this)
        this.plus = this.plus.bind(this)
    }

    minus() {
        this.setState({value: this.state.value - 1})
    }

    plus() {
        this.setState({value: this.state.value + 1})
    }
    render() {
        console.log('Counter Render')
        return (
            <div>
                <button onClick={this.minus}>-</button>
                <p>{this.state.value}</p>
                <button onClick={this.plus}>+</button>
            </div>
        );
    }

    componentDidMount() {
        console.log('Counter did mount')
    }

    componentDidUpdate() {
        console.log('Counter did update')
    }

    componentWillUnmount() {
        console.log('Counter will unmount')
    }
}

export default UpdateNum