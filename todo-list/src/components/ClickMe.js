import React, { Component } from 'react'

class ClickMe extends Component {

    clickMe() {
        const text = document.getElementById('text')
        if(text.textContent.length > 0) {
            text.textContent = ''
        } else {
            text.textContent = 'You are amazing' 
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.clickMe}>Click Me</button>
                <p id="text">You are amazing</p>
            </div>
        );
    }
}

export default ClickMe