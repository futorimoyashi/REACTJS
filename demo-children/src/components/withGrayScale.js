import React, { Component } from 'react'

export default function(WrappedComponent, option = 1) {
    return class extends Component {
        render() {
           return(
            <div style={{filter: option === 1 ? 'grayscale(1)' : 'grayscale(0)'}}>
                <WrappedComponent {...this.props}/>
            </div>
           )
        }
    }
}