import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.setState({count: this.state.count + 1}), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return <div>{this.props.children(this.state)}</div>
    }
}