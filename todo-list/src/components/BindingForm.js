import React, { Component } from 'react'

class BindingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    const textEl = document.getElementById('binding-block');
    const nextTextValue = 'Hello, ' + this.state.value;
    textEl.textContent = nextTextValue;
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <p id="binding-block">Hello, </p>
      </form>
    );
    }
}

export default BindingForm